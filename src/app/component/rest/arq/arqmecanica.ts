/**
 * Created by jdominguez on 11/10/16.
 */
import {Component, ChangeDetectorRef, Input, ViewChild, ElementRef} from '@angular/core';
import {IMultiSelectTexts, IMultiSelectSettings, IMultiSelectOption} from "../shared/multiselect-dropdown";
import {UtilService} from "../../../service/util.service";
import {EtiquetaService} from "../../../service/etiquetas.service";
import {EspacioConfig} from "../../../model/EspacioConfig";
import {CatItemService} from "../../../service/catitem.service";
import {CategoryService} from "../../../service/category.service";
import {SubCategoryService} from "../../../service/subcategory.service";
import {ListaService} from "../../../service/listas.service";
import {ArqListTable} from "../../../model/alsuper/ArqListTable";
import {FileUploader} from "ng2-file-upload";
import {ConfigMedio} from "../../../model/ConfigMedio";
import {Persistence} from "../../../service/persistence";
import {ArqTableModel} from "../../../model/alsuper/ArqTableModel";


@Component({
  selector: 'arqmecanica',
  templateUrl: './arqmecanica.html',
  styleUrls: ['../../../../resources/css/arqmecanica.css','../../../../resources/css/modalPrecioPromo.css']
})

export class ArqMecanica {

  @Input() espacios: EspacioConfig[] = [];
  @Input() configMedio: ConfigMedio;

  private eventoId: number = 5;
  private modalID: string;
  private bttnOpenAlert: string;

  private alertSucces: boolean;
  private alertWarn: boolean;
  private alertInfo: boolean;
  private alertDanger: boolean;
  private mensajeAlert: string;
  private tituloAlert: string;

  private selectSettingsOne: IMultiSelectSettings = {
    pullRight: false,
    enableSearch: true,
    checkedStyle: 'glyphicon',
    buttonClasses: 'btn btn-primary',
    selectionLimit: 1,
    closeOnSelect: true,
    showCheckAll: false,
    showUncheckAll: false,
    dynamicTitleMaxItems: 0,
    maxHeight: '200px',
    dropup: false
  };

  private selectSettings: IMultiSelectSettings = {
    pullRight: false,
    enableSearch: true,
    checkedStyle: 'glyphicon',
    buttonClasses: 'btn btn-primary',
    selectionLimit: 0,
    closeOnSelect: false,
    showCheckAll: true,
    showUncheckAll: true,
    dynamicTitleMaxItems: 2,
    maxHeight: '300px',
  };

  private selectTexts: IMultiSelectTexts = {
    checkAll: 'Todos',
    uncheckAll: 'Quitar Todos',
    checked: 'Seleccionado',
    checkedPlural: '',
    searchPlaceholder: 'Buscar...',
    defaultTitle: ''
  };

  /* *********** Selected Items ******** */

  private tableList: ArqListTable[] = [];
  private rows: ArqTableModel[] = [];

  private precioPromo: number = 0.00;
  private porcentaje: number = 0.00;

  private uploader: FileUploader = new FileUploader({url: 'http://localhost:4200'});
  private hasBaseDropZoneOver: boolean = false;

  constructor(public detectarCambios: ChangeDetectorRef,
              private util: UtilService,
              private etiquetaService: EtiquetaService,
              private itemService: CatItemService,
              private categoService: CategoryService,
              private subcategoService: SubCategoryService,
              private listService: ListaService,
              private persistence: Persistence){

  }

  ngOnInit(){
    this.modalID = 'alert' + Math.floor(Math.random() * 6542370);
    this.bttnOpenAlert = 'openAlert' + Math.floor(Math.random() * 6542370);
  }

  initCombos(){

  }

  onUpload(){


  }

  onSave(){

  }

  openImportWindow(){
    this.callAlert('Importar Ofertas', 'teste cancelar', this.util.INFO_ALERT);
  }

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  callAlert(titulo: string, mensaje: string, tipo: string){
    this.tituloAlert = titulo;
    this.mensajeAlert = mensaje;
    this.setAlertVariables(tipo);
    this.util.openCustomAlert(this.bttnOpenAlert);
  }

  setAlertVariables(type: string){
    this.alertWarn = false;
    this.alertDanger = false;
    this.alertInfo = false;
    this.alertSucces = false;

    switch (type){
      case this.util.SUCCESS_ALERT: this.alertSucces = true; break;
      case this.util.DANGER_ALERT: this.alertDanger = true; break;
      case this.util.INFO_ALERT: this.alertInfo = true; break;
      case this.util.WARN_ALERT: this.alertWarn = true; break;
    }
  }

/* ***************************************** */
  changeIdEvento(id: number){
    if (this.eventoId != id){
      this.eventoId = id;
      this.detectarCambios.detectChanges();
      console.log("ArqMecanica: " +this.eventoId);
    }
  }




}
