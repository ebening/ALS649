import {Component, ChangeDetectorRef} from '@angular/core';
import { Router } from '@angular/router';
import {EventoService} from "../../service/evento.service";
import {TblEvento} from "../../model/TblEvento";
import {UtilService} from "../../service/util.service";
import {Persistence} from "../../service/persistence";
import {ConfigMedio} from "../../model/ConfigMedio";
import {MenuService} from "../../service/menu.service";
import {UserActionService} from "../../service/useraction.service";
import {UserAction} from "../../enum/UserAction";

@Component({
  selector: 'menuVertical',
  templateUrl: './menuVertical.html',
  styleUrls:['../../../resources/css/menuVertical.css']
})

export class MenuVerticalComponent{

  constructor(
    private eventoService: EventoService,
    public detectarCambios: ChangeDetectorRef,
    private menuService: MenuService,
    private userActionService: UserActionService,
    private router: Router,
    private persistence: Persistence){
    this.persistence.menu = this.menuService.createMenu(this.eventoService.getEventosList());
  }

  onCloseSession(){
    localStorage.setItem("logged", null);
    this.persistence.clearPersistence();
    this.detectarCambios.detectChanges();
    this.router.navigateByUrl('/');
  }

  onMedioSelected(medio: ConfigMedio, evento: TblEvento){
    this.persistence.medioSelected = medio;
    this.persistence.eventoSelected = evento;
    this.persistence.initEspaciosList();
    this.router.navigateByUrl('principal/tabarq');
  }

  onEventoSelected(evento: TblEvento){
    this.persistence.eventoSelected = evento;
    if (this.userActionService.userCanAction(UserAction.MENU_ADM_FEST) == true){
      this.persistence.medioSelected = null;
      this.router.navigateByUrl('principal/tabarq');
    }
  }

  onNuevoEvento(){
    this.persistence.eventoSelected = null;
    this.router.navigateByUrl('principal/nuevo');
  }

  onAdmUsers(){
    this.router.navigateByUrl('principal/users');
  }
}
