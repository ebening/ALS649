


import {UsuariosPerfiles} from "./UsuariosPerfiles";
import {CategoriasUsuarios} from "./CategoriasUsuarios";


export class Usuarios {

  public usuariosid: number;
  public activo: boolean;
  public direccion: string;
  public fechaCreacion: Date;
  public fechaModificacion: Date;
  public nombre: string;
  public usuarioCreadoroid: number;
  public usuarioModificador: number;
  public amaterno: string;
  public apaterno: string;
  public correo: string;
  public password: string;
  public username: string;
  public session: boolean;
  public token: string;

  public perfiles: UsuariosPerfiles[] = [];
  public categorias: CategoriasUsuarios[] = [];
}
