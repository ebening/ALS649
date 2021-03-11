/**
 * Created by jdominguez on 11/10/16.
 */
import {Component, ChangeDetectionStrategy} from '@angular/core';
import {EtiquetaService} from "../../../service/etiquetas.service";
import {Persistence} from "../../../service/persistence";
import {UserActionService} from "../../../service/useraction.service";
import {UserAction} from "../../../enum/UserAction";



@Component({
  selector: 'tabarq',
  templateUrl: './tabarq.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class TabArq{

  private tabMecanicaSelected: boolean = false;
  private tabEventoSelected: boolean = true;

  constructor(
    private etiquetaService: EtiquetaService,
    private userActionService: UserActionService,
    private persistence: Persistence){}

  permitTabAdmEspacios(): boolean{
    return this.userActionService.userCanAction(UserAction.TAB_ADM_ESPACIOS);
  }

  permitTabAdmMedios(): boolean{
    return this.userActionService.userCanAction(UserAction.TAB_ADM_MEDIOS);
  }

  permitTabAdmEventos(): boolean{
    return this.userActionService.userCanAction(UserAction.TAB_ADM_EVENTO);
  }

  permitTabEspacios(): boolean{
    return this.userActionService.userCanAction(UserAction.TAB_ESPACIOS);
  }

  permitTabOfertas(): boolean{
    return this.userActionService.userCanAction(UserAction.TAB_OFERTAS);
  }

  doOnTabEvento(){
    this.tabEventoSelected = true;
  }

  doOnTabEventoOut(){
    this.tabEventoSelected = false;
  }

  doOnTabMecanica(currentTab: any){
    this.tabMecanicaSelected = true;
  }

  donOnTabMecanicaOut(){
    this.tabMecanicaSelected = false;
  }

}
