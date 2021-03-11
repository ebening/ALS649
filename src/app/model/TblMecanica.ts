/**
 * Created by jdominguez on 11/10/16.
 */
import {TblComponente} from "./TblComponente";

export class TblMecanica {
  public id: number;
  public nombre: string;
  public precioPromo: number;
  public porcentaje: number;
  public especial: string;
  public comentarios: string;
  public soloundia: boolean;
  public lunes: boolean;
  public martes: boolean;
  public miercoles: boolean;
  public jueves: boolean;
  public viernes: boolean;
  public sabado: boolean;
  public domingo: boolean;
  public fechaInicial: Date;
  public fechaFinal: Date;
  public componentes: TblComponente[];
  public hoja: number;
  public espacio: number;
  public canonazo: boolean;
  public pclub: boolean;
  public asignada: boolean = false;
  public hasArticulos: boolean = false;
  public hasPrecios: boolean = false;
}
