/**
* Created by Jorge Dominguez with Custom Angular Model Generator v1.0
* 19 / 12 / 2016
*/

import {Acciones} from "./Acciones";



export class Modulos {

  public modulosid: number;
  public activo: boolean;
  public fechaCreacion: Date;
  public fechaModificacion: Date;
  public modulosPadreId: number;
  public nombre: string;
  public usuarioCreadoroid: number;
  public usuarioModificador: number;

  public acciones: Acciones[] = [];

}
