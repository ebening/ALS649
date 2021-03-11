/**
 * Created by jdominguez on 11/10/16.
 */
import { Usuarios } from './Usuarios';
import { CatEtiqueta } from './CatEtiqueta';
import { CatTipo } from './CatTipo';
import { CatFlujo } from './CatFlujo';
import { CatEstatus } from './CatEstatus';
import {ConfigMedio} from "./ConfigMedio";

export class TblEvento {
  public id: number;
  public nombre: string = '';
  public fechaInicio: Date;
  public fechaFin: Date = new Date();
  public fechaCreacion: Date = new Date();
  public etiqueta: CatEtiqueta;
  public tipo: CatTipo;
  public creador: Usuarios;
  public flujo: CatFlujo;
  public estatus: CatEstatus;
  public responsable: Usuarios;
  public totalMedios: number = 0;

  /**
   * MEDIOS
   *
   */
  public medios: ConfigMedio[] = [];

  public tabloides: ConfigMedio[] = [];
  public dipticos: ConfigMedio[] = [];
  public volantes: ConfigMedio[] = [];
  public prensa: ConfigMedio[] = [];
  public radiotv: ConfigMedio[] = [];


  /**
   * Uso FRONT - END
   */
  public medioCollapseID: string = 'FEST' + Math.floor(Math.random() * 100000);
  public idMenuTab: string = 'TAB' + Math.floor(Math.random() * 100000);
  public idMenuDP: string = 'DP' + Math.floor(Math.random() * 100000);
  public idMenuPR: string = 'PR' + Math.floor(Math.random() * 100000);
  public idMenuVol: string = 'VOL' + Math.floor(Math.random() * 100000);
  public idMenuRad: string = 'RAD' + Math.floor(Math.random() * 100000);



}
