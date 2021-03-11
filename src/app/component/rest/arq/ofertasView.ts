/**
 * Created by jdominguez on 12/1/16.
 */

import {Component, Input} from "@angular/core";
import {IMultiSelectTexts} from "../shared/multiselect-dropdown";
import {EtiquetaService} from "../../../service/etiquetas.service";
import {ArqTableModel} from "../../../model/alsuper/ArqTableModel";
import {CategoryService} from "../../../service/category.service";
import {SubCategoryService} from "../../../service/subcategory.service";
import {UtilService} from "../../../service/util.service";
import {CatItemService} from "../../../service/catitem.service";
import {CatItem} from "../../../model/CatItem";
import {Persistence} from "../../../service/persistence";
import {CatSubcategory} from "../../../model/CatSubcategory";

declare let XLSX: any;

@Component({
    selector: 'ofertasView',
    templateUrl: './ofertasView.html',
    styleUrls: ['../../../../resources/css/ofertasView.css'],
})
export class OfertasView {



    // ******** Combos ******* //

    private selectTexts: IMultiSelectTexts = {
        checkAll: 'Todos',
        uncheckAll: 'Quitar Todos',
        checked: 'Seleccionado',
        checkedPlural: 'Seleccionados',
        searchPlaceholder: 'Buscar...',
        defaultTitle: ''
    };

    // ******************** //

    private hasBaseDropZoneOver: boolean = false;
    private ofertas: ArqTableModel[] = [];
    private indextabEspacios: number = 0;

    private options = {
        readAs: 'BinaryString'
    };


    constructor(private etService: EtiquetaService,
                private util: UtilService,
                private categoService: CategoryService,
                private itemService: CatItemService,
                private subCategoService: SubCategoryService,
                private persistence: Persistence) {
    }

    onSave() {
        this.ofertas.forEach(x => {
            if (x.isSelected) {
                if (this.indextabEspacios < this.persistence.tabEspaciosList.length) {
                    x.numero = this.indextabEspacios + 1;
                    this.persistence.tabEspaciosList[this.indextabEspacios] = x;
                    this.indextabEspacios++;
                }
            }
        });
    }

    rowSelect(row: ArqTableModel) {
        row.isSelected = !row.isSelected;
    }

    public fileOver(fileIsOver: boolean): void {
        this.hasBaseDropZoneOver = fileIsOver;
    }

    public onFileDrop(file: File): void {
        var hasRowsError: boolean = false;
        var alertMjs: string = '';
        let ofertasNuevas: ArqTableModel[] = [];
        try {
            var workbook = XLSX.read(file, {type: 'binary'});
            var sheets: string[] = workbook.SheetNames;
            let cellCheckformat = workbook.Sheets[sheets[0]]['B2'];
            if (cellCheckformat == null || cellCheckformat.v.toUpperCase() != 'FESTIVAL:'){
                throw new TypeError('Archivo seleccionado no corresponde al formato establecido');
            }
            sheets.forEach(x => {
                let worksheet = workbook.Sheets[x];
                var isLastRow = false;
                for (var i: number = 11; !isLastRow; i++) {
                    let cell = worksheet['C' + i];
                    if (cell != null) {
                        let cellData = worksheet['D' + i];
                        if (cellData != null) {
                            let subCatego: CatSubcategory = this.subCategoService.getSubCategoByName(worksheet['C' + i].v);
                            if (subCatego == null || isNaN(Number(worksheet['K' + i] == null ? 0.00 : worksheet['K' + i].v))) {
                                console.log("Sheet: " + x + " => Row without Process: " + i + " => Value: " + cellData.v);
                                hasRowsError = true;
                                alertMjs = alertMjs + "Hoja: " + x + " => Registro: " + i + " *** ";
                                continue;
                            }
                            let row: ArqTableModel = new ArqTableModel();
                            row.area = worksheet['B' + i].v as number;
                            row.subSeg = cellData.v;
                            row.grupoArt = subCatego.id;
                            row.precioOferta = worksheet['K' + i] == null ? 0.00 : Number(worksheet['K' + i].v);
                            row.preciazoClub = worksheet['L' + i] == null ? '' : worksheet['L' + i].v;
                            row.vigencia = worksheet['M' + i] == null ? '' : worksheet['M' + i].v;
                            row.obs = worksheet['N' + i] == null ? '' : worksheet['N' + i].v;
                            ofertasNuevas.push(row);
                        }
                    } else if (worksheet['C' + (i + 1)] == null) {
                        isLastRow = true;
                    }

                }
            });
            this.ofertas = this.ofertas.concat(ofertasNuevas);
            if (hasRowsError == true) {
                this.util.callAlert('Registros sin Procesar', alertMjs, this.util.DANGER_ALERT, 'openOfertasAlert');
            }
        }catch (e){
            var msj:string = 'Error Desconocido';
            if (e instanceof TypeError){
                msj = 'Archivo seleccionado no corresponde al formato establecido';
            }else if (e instanceof Error){
                msj = 'Archivo no es tipo Excel (XLS ó XLSX) o esta dañado';
            }
            this.util.callAlert('Error Validacion Archivo', msj , this.util.DANGER_ALERT, 'openOfertasAlert');
        }

    }
}
