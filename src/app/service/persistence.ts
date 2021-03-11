/**
 * Created by jdominguez on 11/19/16.
 */


import {Injectable} from "@angular/core";
import {ConfigMedio} from "../model/ConfigMedio";
import {cloneDeep} from "lodash";
import {TblEvento} from "../model/TblEvento";
import {ArqTableModel} from "../model/alsuper/ArqTableModel";
import {MenuModel} from "../model/menu/MenuModel";
import {UserAction} from "../enum/UserAction";

@Injectable()
export class Persistence{

  public idSubCategLogged: number = 1;

  public menu: MenuModel[] = [];
  public eventoSelected: TblEvento;
  public medioSelected: ConfigMedio;
  public tabEspaciosList: ArqTableModel[] = [];

  /* ********* PortaPapeles ************ */

  public copyAux: any[];

  /* ****************************** */

  initEspaciosList(){
    this.tabEspaciosList = [];
    this.medioSelected.espacios.forEach(x => {
      let row: ArqTableModel = new ArqTableModel();
      row.numero = x.espacio;
      row.area = x.categoria.id;
      row.grupoArt = x.subcategory.id;
      this.tabEspaciosList.push(row);
    });
  }

  saveForCopy(xCopy: any[]){
    this.copyAux = cloneDeep(xCopy);
  }

  getForPaste(): any[]{
    return this.copyAux;
  }

  clearPersistence(){
    this.eventoSelected = null;
    this.menu = [];
    this.medioSelected = null;
    this.tabEspaciosList = [];
  }

}
