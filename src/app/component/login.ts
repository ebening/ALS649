/**
 * Created by jdominguez on 11/7/16.
 */
import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {Usuarios} from "../model/Usuarios";
import {UserService} from "../service/usuarios.service";
import {UtilService} from "../service/util.service";
import { Md5 } from 'ts-md5/dist/md5';
import {LoginService} from "../service/login.service";


@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['../../resources/css/login.css', '../../resources/css/principal.css']
})
export class LoginComponent{

  private model = {'username':'', 'pwd':''};
  private mensajeAlert: string;
  private tituloAlert: string;

  constructor(
    private router: Router,
    private util: UtilService,
    private userService: UserService,
    private loginService: LoginService){}


  login(){
    var valid: boolean = false;
    if (this.model.username == 'mkt'){
      valid = true;
      localStorage.setItem("logged", JSON.stringify(this.userService.getUserMkt()));
    }else{
      this.mensajeAlert = 'Contraseña NO VALIDA';
      this.tituloAlert = 'Error Validacion';
      this.util.openCustomAlert('openLoginAlert');
    }
    if (valid == true){
      this.router.navigateByUrl('principal');
    }
  }

 /* login(){
    this.model.pwd = Md5.hashStr(this.model.pwd).toString();
    this.loginService.login(this.model).subscribe(
        data => {
          localStorage.setItem("token", JSON.parse(JSON.stringify(data))._body);
          this.loginService.getLoggedUser(this.model.username).subscribe(
              data => {
                let userLogged: Usuarios = JSON.parse(JSON.stringify(data))._body;
                console.log("Usuario : " + userLogged.nombre);
                localStorage.setItem("logged", JSON.stringify(userLogged));
                this.router.navigateByUrl('principal');
              },
              error => {
                console.log(error);
                if (!(error._body instanceof ProgressEvent)){
                  let tm1: string[] = error._body.split(',');
                  let tm2: string[] = tm1[4].split(':');
                  this.mensajeAlert = tm2[1].replace(/[\[\]"]+/g,'');
                  this.tituloAlert = 'Error Validacion';
                  this.util.openCustomAlert('openLoginAlert');
                }
              }
          );
        },
        error => {
          console.log(error);
          if (!(error._body instanceof ProgressEvent)){
            let tm1: string[] = error._body.split(',');
            let tm2: string[] = tm1[4].split(':');
            this.mensajeAlert = tm2[1].replace(/[\[\]"]+/g,'');
            this.tituloAlert = 'Error Validacion';
            this.util.openCustomAlert('openLoginAlert');
          }
        }
    );
  } */

}
