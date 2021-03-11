/**
 * Created by jdominguez on 12/3/16.
 */

import {TblEvento} from "../TblEvento";

export class MesMenu {
  public id: number;
  public name: string;
  public mesNumber: number;
  public festivales: TblEvento[] = [];

  public festivalCollapseID: string = 'SM' + Math.floor(Math.random() * 100000);
}
