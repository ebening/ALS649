import {Component, Input } from '@angular/core';
import {Observable} from "rxjs";

@Component({
    selector: 'principal',
    templateUrl: './principal.html',
    styleUrls: ['../../../resources/css/principal.css']
})

export class PrincipalComponent{
    @Input() fechaSistema: string="09/11/2016 01:48 pm";
    @Input() usuarioSistema: string="Administrador";
    @Input() versionSistema: string="Version 2.0";
    @Input() nombrePantalla: string="Pantalla: Arquitectura";

  clock = Observable.interval(1000).map(()=> new Date());


  constructor(){}

  ngOnInit(){
    let userLogged = JSON.parse(localStorage.getItem("logged"));
    this.usuarioSistema = userLogged.nombre + ' ' + userLogged.apaterno;
  }

}
