

import {Modulos} from "./Modulos";
export class Acciones {

  public accionesid: number;
  public activo: boolean;
  public descripcion: string;
  public fechaCreacion: Date;
  public fechaModificacion: Date;
  public modulosid: number;
  public nombre: string;
  public usuarioCreadoroid: number;
  public usuarioModificador: number;

  public modulo: Modulos;

}
