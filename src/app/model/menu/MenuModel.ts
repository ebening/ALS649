import {MesMenu} from "./MesMenu";
/**
 * Created by jdominguez on 12/3/16.
 */


export class MenuModel {
  public id: number;
  public year: number;
  public meses: MesMenu[] = [];
  public mesesID: string = 'MT' + Math.floor(Math.random() * 100000);
}
