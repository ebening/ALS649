import {TblMecanica} from "./TblMecanica";
/**
 * Created by jdominguez on 11/15/16.
 */

export class MecanicaEspacio {
  public id: number;
  public hoja: number;
  public espacio: number;
  public mecanica: TblMecanica = new TblMecanica();
  public hasArticulos: boolean = false;
  public hasPrecios: boolean = false;
}
