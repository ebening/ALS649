/**
 * Created by jdominguez on 11/10/16.
 */
import {Injectable} from '@angular/core';
import {ArqTableModel} from "../model/alsuper/ArqTableModel";
import {CatItem} from "../model/CatItem";
import {ArqListTable} from "../model/alsuper/ArqListTable";
import {Medio} from "../enum/Medio";

Injectable()
export class UtilService{

  /*********   CAMBIAR COFIGURACION APUNTANDO AL SERVIDOR WEBSERVICE NO PUEDE SER LOCALHOST   *************/
    //private url : string = "http://citrax:8080/";

  private url: string = "http://localhost:8080/";

    // ******* Variables Alert *********** //

    private tituloModal: string = '';
    private mensajeModal: string = '';

    private alertSucces: boolean;
    private alertWarn: boolean;
    private alertInfo: boolean;
    private alertDanger: boolean;

  /* *******   Clases para los modales ************ */
  public SUCCESS_ALERT: string = 'alert-success';
  public INFO_ALERT: string = 'alert-info';
  public WARN_ALERT: string = 'alert-warning';
  public DANGER_ALERT: string = 'alert-danger';

  public OPEN_ALERT: string = 'bttnOpenModal';

  public EVENTO_SELECTED: number = 0;

  constructor(){}

  geturl(){
    return this.url;
  }

  getMonthNameByNumber(num: number): string{
    let meses: string[] = [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
    ];
    return meses[num];
  }

  openCustomAlert(idElement: string){
    document.getElementById(idElement).click();
  }

  getOfertasGuardadas(area: number, gart: number, items: CatItem[], cant: number = 10): ArqTableModel[]{
    let array: ArqTableModel[] = [];
    for (var i: number = 0; i < cant; i++){
      let object: ArqTableModel = new ArqTableModel();
      object.items.push(items[i]);
      object.area = area;
      object.grupoArt = gart;
      object.subSeg = '' + Math.floor(Math.random() * 3000);
      object.precioOferta = Math.floor(Math.random() * 100);
      object.preciazoClub = 'NA';
      object.vigencia = 'M-L';
      object.obs = 'Observaciones para MKT';
      array.push(object);
    }
    return array;
  }

  getListTableModel(tipo: Medio = Medio.TABLOIDE): ArqListTable[]{
      let array: ArqListTable[] = [];
      let productos: string[] = [
          '96824','225422','231380','348695','365721','372942','372946','380859','380861','387903'
      ];
      let hojas: any[];
      var countImages: number = 0;
      switch (tipo){
          case Medio.TABLOIDE:
              hojas = this.getConfigHojaTabloide();
              break;
          default:
              hojas = [];
      }
      for (var i: number = 0; i < hojas.length; i++){
          let item: ArqListTable = new ArqListTable();
          item.id = i;
          item.nameRow = hojas[i].pageName;
          let rows: ArqTableModel[] = [];
          for (var y: number = 0; y < hojas[i].espacios; y++){
              let row: ArqTableModel = new ArqTableModel();
              let items: CatItem[] = this.getItemsByCatego(y, 1);
              row.area = 1;
              row.numero = y + 1;
              row.obs = 'Comentarios';
              row.grupoArt = 3;
              row.subSeg = '' + Math.floor(Math.random() * 3000);
              row.precioOferta = Math.floor(Math.random() * 100);
              row.preciazoClub = 'NA';
              row.vigencia = 'M-L';
              row.items = items;
              row.imageURL = '../../../../resources/images/products/'+ productos[countImages] +'.jpg';
              countImages++;
              if (countImages == productos.length){
                  countImages = 0;
              }
              rows.push(row);
          }
          item.rows = rows;
          array.push(item);
      }
      return array;
  }

  getConfigHojaTabloide(): any[]{
      let array: any[] = [];
      let hojas: number = 9;
      for (var i: number = 0; i < 9; i++){
          let espacios: number;
          let pageName: string;
          switch (i){
              case 0:
                  espacios = 16;
                  pageName = 'Portada';
                  break;
              case 1:
                  espacios = 20;
                  pageName = 'Pagina 1';
                  break;
              case 8:
                  espacios = 18;
                  pageName = 'Contra-Portada';
                  break;
              default:
                  espacios = 12;
                  pageName = 'Pagina ' + i;
                  break;
          }
          array.push({hoja: i, pageName: pageName, espacios: espacios});
      }
      return array;
  }

  // ******** DEMO BORRAR PARA PRODUCCION ************* //

    getItemsByCatego(id: number, cant: number = 31): CatItem[]{
        let array: CatItem[] = [];
        for (var i: number = 1; i <= cant; i++){
            let item: CatItem = new CatItem();
            item.id = (i * 10) + 1;
            item.descripcion = 'Articulo ' + i;
            item.precioRegular = Math.floor(Math.random() * 200) + 50;
            item.marca = 'Acme';
            item.modelo = '2016';
            item.presentacion = '1 Lt';
            item.upc = '87125346';
            array.push(item);
        }
        return array;
    }

    callAlert(titulo: string, mensaje: string, tipo: string, idbtnOpenModal: string) {
        this.tituloModal = titulo;
        this.mensajeModal = mensaje;
        this.setAlertVariables(tipo);
        this.openCustomAlert(idbtnOpenModal);
    }

    setAlertVariables(type: string) {
        this.alertWarn = false;
        this.alertDanger = false;
        this.alertInfo = false;
        this.alertSucces = false;

        switch (type) {
            case this.SUCCESS_ALERT:
                this.alertSucces = true;
                break;
            case this.DANGER_ALERT:
                this.alertDanger = true;
                break;
            case this.INFO_ALERT:
                this.alertInfo = true;
                break;
            case this.WARN_ALERT:
                this.alertWarn = true;
                break;
        }
    }
}
