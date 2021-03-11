/**
* Created by Jorge Dominguez with Custom Angular Model Generator v1.0
* 19 / 12 / 2016
*/

import {Perfiles} from "./Perfiles";



export class UsuariosPerfiles {

  public usuariosid: number;
  public perfilesid: number;
  public activo: boolean;
  public aprovatorio: string;
  public fechaCreacion: Date;
  public fechaModificacion: Date;
  public usuarioCreadoroid: number;
  public usuarioModificador: number;

  public perfil: Perfiles;
}
