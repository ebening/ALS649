/**
 * Created by jdominguez on 12/3/16.
 */


import {Injectable} from "@angular/core";
import {TblEvento} from "../model/TblEvento";
import {MenuModel} from "../model/menu/MenuModel";
import {MesMenu} from "../model/menu/MesMenu";
@Injectable()

export class MenuService {

  createMenu(eventos: TblEvento[]): MenuModel[]{
    let menus: MenuModel[] = [];
    let menu: MenuModel = new MenuModel();
    menu.id = 1;
    menu.year = 2017;

    let enero: MesMenu = new MesMenu();
    enero.id = 11;
    enero.name = 'Enero';
    enero.festivales = eventos;
    enero.mesNumber = 0;
    menu.meses.push(enero);

    let febrero: MesMenu = new MesMenu();
    febrero.id = 12;
    febrero.name = 'Febrero';
    febrero.festivales = [];
    febrero.mesNumber = 1;
    menu.meses.push(febrero);

    let marzo: MesMenu = new MesMenu();
    marzo.id = 13;
    marzo.name = 'Marzo';
    marzo.festivales = [];
    marzo.mesNumber = 2;
    menu.meses.push(marzo);

    menus.push(menu);
    return menus;
  }

}
