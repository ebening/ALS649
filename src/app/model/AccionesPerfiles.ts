/**
* Created by Jorge Dominguez with Custom Angular Model Generator v1.0
* 19 / 12 / 2016
*/

import {Acciones} from "./Acciones";
import {Perfiles} from "./Perfiles";


export class AccionesPerfiles {

  public perfilesid: number;
  public accionesId: number;
  public activo: boolean;
  public fechaCreacion: Date;
  public fechaModificacion: Date;
  public usuarioCreadoroid: number;
  public usuarioModificador: number;

  public accion: Acciones;
  public perfil: Perfiles;

}
