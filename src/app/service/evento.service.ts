/**
 * Created by jdominguez on 11/10/16.
 */
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { UtilService } from './util.service';
import {TblEvento} from "../model/TblEvento";
import {CatEtiqueta} from "../model/CatEtiqueta";
import {CatTipo} from "../model/CatTipo";
import {Usuarios} from "../model/Usuarios";
import {CatFlujo} from "../model/CatFlujo";
import {CatEstatus} from "../model/CatEstatus";
import {EtiquetaService} from "./etiquetas.service";
import {$, Config} from "protractor";
import {DatePipe} from "@angular/common";
import {ConfigMedio} from "../model/ConfigMedio";
import {CatMedio} from "../model/CatMedio";
import {EspacioConfig} from "../model/EspacioConfig";
import {CatCategory} from "../model/CatCategory";
import {CatSubcategory} from "../model/CatSubcategory";

@Injectable()
export class EventoService {

  list: TblEvento[] = [];

  constructor(private http: Http, private util: UtilService, private etiquetaService: EtiquetaService){}

  getEventosList(): TblEvento[] {
    for (var i: number = 1; i < 4; i++){
      let evento: TblEvento = this.getEventoById(i);
      if (i == 3){
        evento.tabloides = [];
        evento.tabloides.push(this.generateTabloide());
        evento.totalMedios = 1;
      }
      this.list.push(evento);
    }
    return this.list;
  }

  getEventoById(id: number): TblEvento {
    let evento: TblEvento = new TblEvento();
    switch (id){
      case 1: evento.nombre = 'De Carnes';break;
      case 2: evento.nombre = 'Del Campo a su Mesa';break;
      case 3: evento.nombre = 'De la Limpieza';break;
    }

    evento.id = id;
    evento.fechaInicio = new Date();
    evento.fechaFin = new Date();
    evento.fechaCreacion = new Date();

    let etiqueta: CatEtiqueta = new CatEtiqueta();
    etiqueta.id = id;
    etiqueta.codigo = '#FFAFAF';
    etiqueta.nombre = 'Azul';

    let tipo: CatTipo = new CatTipo();
    tipo.id = id;
    tipo.nombre = 'Semanal';

    let creador: Usuarios = new Usuarios();
    creador.usuariosid = id;
    creador.nombre = 'Marketing';
    creador.apaterno = 'AlSuper';
    creador.amaterno = '';

    let flujo: CatFlujo = new CatFlujo();
    flujo.id = id;
    flujo.nombre = 'Normal';
    flujo.diasAntesInicio = 5;
    flujo.diasTotales = 10;

    let estatus: CatEstatus = new CatEstatus();
    estatus.id = id;
    estatus.nombre = 'Abierto';

    let responsable: Usuarios = new Usuarios();
    responsable.usuariosid = id + 1;
    responsable.nombre = 'Compras';
    responsable.apaterno = 'AlSuper';
    responsable.amaterno = '';

    evento.etiqueta = etiqueta;
    evento.tipo = tipo;
    evento.creador = creador;
    evento.flujo = flujo;
    evento.estatus = estatus;
    evento.responsable = responsable;

    return evento;
  }

  generateTabloide(): ConfigMedio{
    let cfg: ConfigMedio = new ConfigMedio();
    cfg.fechaFin = new Date();
    cfg.fechaInit = new Date();
    cfg.nombre = 'Tabloide Aut';
    cfg.tipo = this.getCatMedioById(1);
    cfg.espacios = [];
    for (var i: number = 0; i < 5; i++){
      let espacio: EspacioConfig = new EspacioConfig();
      espacio.hoja = 0;
      espacio.espacio = i + 1;
      espacio.id = i + 1;
      espacio.categoria = this.generateCategory();
      espacio.subcategory = this.generateSubCatego();
      cfg.espacios.push(espacio);
    }
    return cfg;
  }

  generateSubCatego(): CatSubcategory {
    let sub: CatSubcategory = new CatSubcategory();
    sub.id = 6;
    sub.nombre = 'Congelados';
    return sub;
  }

  generateCategory(): CatCategory {
    let cat: CatCategory = new CatCategory();
    cat.id = 1;
    cat.nombre = 'Perecederos';
    return cat;
  }

  getCatMedioById(id: number): CatMedio{
    var nombre: string = '';
    switch (id){
      case 1: nombre = 'Tabloide';break;
      case 2: nombre = 'Diptico';break;
      case 3: nombre = 'Prensa';break;
      case 4: nombre = 'Volante';break;
      case 5: nombre = 'Radio Tv';break;
    }
    let medio: CatMedio = new CatMedio();
    medio.id = id;
    medio.nombre = nombre;
    return medio;
  }
}
