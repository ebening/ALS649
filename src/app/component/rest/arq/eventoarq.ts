/**
 * Created by jdominguez on 11/10/16.
 */
import {ChangeDetectorRef, Component, Input} from '@angular/core';
import {IMultiSelectOption, IMultiSelectTexts, IMultiSelectSettings} from '../shared/multiselect-dropdown';
import {TblEvento} from "../../../model/TblEvento";
import {EventoService} from "../../../service/evento.service";
import {ListaService} from "../../../service/listas.service";
import { ProgramaService } from "../../../service/programa.service";
import {UtilService} from "../../../service/util.service";
import {CategoryService} from "../../../service/category.service";
import {Router} from "@angular/router";
import {Persistence} from "../../../service/persistence";
import {MenuModel} from "../../../model/menu/MenuModel";
import {MesMenu} from "../../../model/menu/MesMenu";

import * as moment from 'moment';

@Component({
  selector: 'eventoarq',
  templateUrl: './eventoarq.html',
  styleUrls: ['../../../../resources/css/eventoarq.css']
})

export class EventoArq {

  @Input() feciniact: string="10/11/2016";
  @Input() fecfinact: string="20/11/2016";

  // ******* Variables Modal *********** //

  private tituloModal: string = '';
  private mensajeModal: string = '';

  private alertSucces: boolean;
  private alertWarn: boolean;
  private alertInfo: boolean;
  private alertDanger: boolean;

  // ***************************** //
  private selectSettings: IMultiSelectSettings = {
    pullRight: false,
    enableSearch: true,
    checkedStyle: 'glyphicon',
    buttonClasses: 'btn btn-primary',
    selectionLimit: 0,
    closeOnSelect: false,
    showCheckAll: true,
    showUncheckAll: true,
    dynamicTitleMaxItems: 1,
    maxHeight: '300px',
    dropup: true
  };

  private selectSettingsOne: IMultiSelectSettings = {
    pullRight: false,
    enableSearch: true,
    checkedStyle: 'glyphicon',
    buttonClasses: 'btn btn-primary',
    selectionLimit: 1,
    closeOnSelect: false,
    showCheckAll: false,
    showUncheckAll: false,
    dynamicTitleMaxItems: 1,
    maxHeight: '300px',
    dropup: false
  };

  private selectTexts: IMultiSelectTexts = {
    checkAll: 'Todos',
    uncheckAll: 'Quitar Todos',
    checked: 'Seleccionado',
    checkedPlural: 'Seleccionados',
    searchPlaceholder: 'Buscar...',
    defaultTitle: ''
  };

  private evento: TblEvento;

  constructor(private detectChg: ChangeDetectorRef,
              private eventoService: EventoService,
              private listService: ListaService,
              private progService: ProgramaService,
              private util: UtilService,
              private categoService: CategoryService,
              private persistence: Persistence,
              private router: Router){

  }

  ngOnInit(){
    if (this.persistence.eventoSelected == null){
      this.evento = new TblEvento();
    }else{
      this.evento = this.persistence.eventoSelected;
    }
    this.initListas();
  }

  ngDoCheck(){
    if (this.persistence.eventoSelected != null){
      if (this.persistence.eventoSelected.id != this.evento.id){
        this.ngOnInit();
      }
    }
  }

  initListas(){

  }

  onSaveButton(){
    var isNew = true;
    var isYearNew = true;
    var yearMenu: MenuModel = null;
    let year: number = moment(this.evento.fechaInicio).year();
    let month: number = moment(this.evento.fechaInicio).month();
    this.persistence.menu.forEach(x => {
      if (x.year == year){
        isYearNew = false;
        yearMenu = x;
        x.meses.forEach(m => {
          if (m.mesNumber == month){
            isNew = false;
            m.festivales.push(this.evento);
            this.callAlert('Confirmacion', 'Festival Agregado', this.util.SUCCESS_ALERT);
          }
        });
      }
    });
    if (isYearNew == true){
      let newYear: MenuModel = new MenuModel();
      newYear.id = year;
      newYear.year = year;
      newYear.meses.push(this.getNewMes(month));
      this.persistence.menu.push(newYear);
      this.callAlert('Confirmacion', 'Festival Agregado', this.util.SUCCESS_ALERT);
    }else if (isNew == true){
      yearMenu.meses.push(this.getNewMes(month));
      this.callAlert('Confirmacion', 'Festival Agregado', this.util.SUCCESS_ALERT);
    }
  }

  private getNewMes(mesNumber: number): MesMenu{
    let mes: MesMenu = new MesMenu();
    mes.mesNumber = mesNumber;
    mes.name = this.util.getMonthNameByNumber(mesNumber);
    mes.festivales.push(this.evento);
    return mes;
  }

  callAlert(titulo: string, mensaje: string, tipo: string){
    this.tituloModal = titulo;
    this.mensajeModal = mensaje;
    this.setAlertVariables(tipo);
    this.util.openCustomAlert('openEventoAlert');
  }

  setAlertVariables(type: string){
    this.alertWarn = false;
    this.alertDanger = false;
    this.alertInfo = false;
    this.alertSucces = false;

    switch (type){
      case this.util.SUCCESS_ALERT: this.alertSucces = true; break;
      case this.util.DANGER_ALERT: this.alertDanger = true; break;
      case this.util.INFO_ALERT: this.alertInfo = true; break;
      case this.util.WARN_ALERT: this.alertWarn = true; break;
    }
  }

}
