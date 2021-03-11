/**
 * Created by jdominguez on 11/13/16.
 */

import {CatGrupoZona} from "./CatGrupoZona";
import {CatZona} from "./CatZona";
import {CatStore} from "./CatStore";

export class PrecioPromo {
  public id: number;
  public gzonas: CatGrupoZona[] = [];
  public zonas: CatZona[] = [];
  public tiendas: CatStore[] = [];
  public vigenciaPc: string[];
  public precioOferta: number = 0.00;
  public porcOferta: number = 0.00;
  public isRowSelect: boolean = false;
}
