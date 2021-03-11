/**
 * Created by jdominguez on 11/12/16.
 */
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { UtilService } from './util.service';
import {CatGrupoZona} from "../model/CatGrupoZona";
import {CatZona} from "../model/CatZona";
import {CatStore} from "../model/CatStore";

@Injectable()
export class ListaService {

  private zonas: any[] = [
    {id: 1, name: 'Chihuahua'},
    {id: 2, name: 'Durango'},
    {id: 3, name: 'Saltillo'},
    {id: 4, name: 'Laguna'}
  ];

  listGrupoZona: CatGrupoZona[] = [];
  listZona: CatZona[] = [];
  listTiendas: CatStore[] = [];

  getGrupoZonas(): CatGrupoZona[] {
    let ids: number[] = [];
    let gz1: CatGrupoZona = new CatGrupoZona();
    gz1.id = 1;
    gz1.nombre = 'Grupo Zona General';
    ids.push(1);
    gz1.zonas = this.getZonasByIdGZ(ids);
    this.listGrupoZona.push(gz1);
    return this.listGrupoZona;
  }

  getZonaById(id: number): CatZona {
    let zon: CatZona = new CatZona();
    this.zonas.filter(x => x.id == id).forEach(y => {
      zon.id = y.id;
      zon.nombre = y.name;
    });
    return zon;
  }

  getZonasByIdGZ(idgz: number[]): CatZona[] {
    this.listZona = [];
      for (var i: number = 0; i < this.zonas.length; i++){
        let zona: CatZona = new CatZona();
        zona.id = this.zonas[i].id;
        zona.nombre = this.zonas[i].name;
        this.listZona.push(zona);
      }
    return this.listZona;
  }

  getTiendasByIdZona(idzona: number[]): CatStore[] {
    this.listTiendas = [];
    for (var j: number = 0; j < idzona.length; j++){
      for (var i:number = 1; i <= 50; i++){
        let tienda: CatStore = new CatStore();
        tienda.id = (10 * idzona[j]) + i;
        tienda.nombre = 'Tienda ' + i + ' Zona ' + idzona[j];
        this.listTiendas.push(tienda);
      }
    }

    return this.listTiendas;
  }

  getTiendasByPrograma(idpropgrama: number): CatStore[]{
    let tiendas: CatStore[] = [];
    for (var i:number = 1; i < 11; i++){
      tiendas.push(this.getTiendaById(i));
    }
    return tiendas;
  }

  getTiendaById(id: number): CatStore {
    let tienda: CatStore = new CatStore();
    tienda.id = id;
    tienda.nombre = 'Tienda ' + id;
    return tienda;
  }


}
