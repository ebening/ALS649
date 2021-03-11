/**
 * Created by jdominguez on 12/3/16.
 */


import {Injectable} from "@angular/core";
import {Usuarios} from "../model/Usuarios";
import { UserAction } from "../enum/UserAction";
import {Perfiles} from "../model/Perfiles";
import {Acciones} from "../model/Acciones";
import {AccionesPerfiles} from "../model/AccionesPerfiles";
import {UsuariosPerfiles} from "../model/UsuariosPerfiles";
@Injectable()
export class UserService {

  public getUserMkt(): Usuarios {
    let user: Usuarios = new Usuarios();
    user.usuariosid = 1;
    user.activo = true;
    user.apaterno = 'Marketin';
    user.amaterno = '';
    user.nombre = 'Delia';
    user.perfiles = [
     this.getAdmProfile()
    ];
  /*  user.actions = [
      UserAction.MENU_ADM_FEST,
      UserAction.TAB_ADM_ESPACIOS,
      UserAction.TAB_ADM_EVENTO,
      UserAction.TAB_ADM_MEDIOS,
      UserAction.ADM_USERS
    ]; */
    return user;
  }

  public getAdmProfile(): UsuariosPerfiles{
    let userprofile: UsuariosPerfiles = new UsuariosPerfiles();
    let profile: Perfiles = new Perfiles();
    profile.nombre = 'Administrador';
    profile.activo = true;
    profile.perfilesid = 1;
    profile.acciones = this.getAdmActions();
    userprofile.perfil = profile;
    return userprofile;
  }

  public getAdmActions(): AccionesPerfiles[]{
    let actions: AccionesPerfiles[] = [];

    var actionProfile: AccionesPerfiles = new AccionesPerfiles();
    var menuAdmFest: Acciones = new Acciones();
    menuAdmFest.activo = true;
    menuAdmFest.descripcion = 'Menu de Administracion de Festivales';
    menuAdmFest.nombre = UserAction.MENU_ADM_FEST.toString();
    actionProfile.accion = menuAdmFest;
    actions.push(actionProfile);

    let actionProfile2: AccionesPerfiles = new AccionesPerfiles();
    let tabAdmEvento: Acciones = new Acciones();
    tabAdmEvento.activo = true;
    tabAdmEvento.descripcion = 'Tab Administracion Festival';
    tabAdmEvento.nombre = UserAction.TAB_ADM_EVENTO.toString();
    actionProfile2.accion = tabAdmEvento;
    actions.push(actionProfile2);

    actionProfile = new AccionesPerfiles();
    menuAdmFest = new Acciones();
    menuAdmFest.activo = true;
    menuAdmFest.descripcion = 'Menu de Pantallas Comprador';
    menuAdmFest.nombre = UserAction.TAB_ESPACIOS.toString();
    actionProfile.accion = menuAdmFest;
    actions.push(actionProfile);

    actionProfile = new AccionesPerfiles();
    menuAdmFest = new Acciones();
    menuAdmFest.activo = true;
    menuAdmFest.descripcion = 'Menu de Administracion de Usuarios';
    menuAdmFest.nombre = UserAction.ADM_USERS.toString();
    actionProfile.accion = menuAdmFest;
    actions.push(actionProfile);

    actionProfile = new AccionesPerfiles();
    menuAdmFest = new Acciones();
    menuAdmFest.activo = true;
    menuAdmFest.descripcion = 'Menu de Administracion de Ofertas';
    menuAdmFest.nombre = UserAction.TAB_OFERTAS.toString();
    actionProfile.accion = menuAdmFest;
    actions.push(actionProfile);

    actionProfile = new AccionesPerfiles();
    menuAdmFest = new Acciones();
    menuAdmFest.activo = true;
    menuAdmFest.descripcion = 'Menu de Administracion de Medios';
    menuAdmFest.nombre = UserAction.TAB_ADM_MEDIOS.toString();
    actionProfile.accion = menuAdmFest;
    actions.push(actionProfile);

    actionProfile = new AccionesPerfiles();
    menuAdmFest = new Acciones();
    menuAdmFest.activo = true;
    menuAdmFest.descripcion = 'Menu de Administracion de Usuarios';
    menuAdmFest.nombre = UserAction.TAB_ADM_ESPACIOS.toString();
    actionProfile.accion = menuAdmFest;
    actions.push(actionProfile);

    return actions;
  }

 /* public getUserCompras(): Usuarios {
    let user: Usuarios = new Usuarios();
    user.usuariosid = 1;
    user.activo = true;
    user.apaterno = 'Comprador';
    user.amaterno = '';
    user.nombre = 'Mariano';
    user.role = 'comprador';
    user.actions = [UserAction.TAB_ESPACIOS,UserAction.TAB_OFERTAS];
    return user;
  } */
}
