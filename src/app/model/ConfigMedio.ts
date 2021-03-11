/**
 * Created by jdominguez on 11/19/16.
 */

import {CatZona} from "./CatZona";
import {CatStore} from "./CatStore";
import {EspacioConfig} from "../model/EspacioConfig";
import {CatMedio} from "./CatMedio";
import {TblEvento} from "./TblEvento";



export class ConfigMedio {
  public nombre: string;
  public tipo: CatMedio;
  public zonas: CatZona[] = [];
  public tiendas: CatStore[] = [];
  public fechaInit: Date;
  public fechaFin: Date;
  public espacios: EspacioConfig[] = [];
}
