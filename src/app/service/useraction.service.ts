/**
 * Created by jdominguez on 12/4/16.
 */


import {Injectable} from "@angular/core";
import {UserAction} from "../enum/UserAction";
import {Usuarios} from "../model/Usuarios";
@Injectable()

export class UserActionService {



  getAdmUsersAction(): UserAction{
    return UserAction.ADM_USERS;
  }

  getAdmFestAction(): UserAction{
    return UserAction.MENU_ADM_FEST;
  }

  public userCanAction(actionCode: UserAction): boolean{
    let userLogged: Usuarios = JSON.parse(localStorage.getItem("logged"));
    var permit: boolean = false;
    userLogged.perfiles.forEach(x => {
      x.perfil.acciones.forEach(action => {
        if (action.accion.nombre == actionCode.toString()){
          permit = true;
        }
      });
    });
    return permit;
  }
}
