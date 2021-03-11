/**
 * Created by Jorge Dominguez with Custom Angular Model Generator v1.0
 * 19 / 12 / 2016
 * */


import {AccionesPerfiles} from "./AccionesPerfiles";


export class Perfiles {

  public perfilesid: number;
  public activo: boolean;
  public fechaCreacion: Date;
  public fechaModificacion: Date;
  public nombre: string;
  public usuarioCreadoroid: number;
  public usuarioModificador: number;

  public acciones: AccionesPerfiles[] = [];
}
