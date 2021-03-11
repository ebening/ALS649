/**
 * Created by jdominguez on 11/19/16.
 */
import {Injectable} from "@angular/core";
import {CatMedio} from "../model/CatMedio";

@Injectable()
export class CatMedioService {

  getCatMedios(): CatMedio[]{
    let medios: CatMedio[] = [];
    for (var i: number = 1; i < 6; i++){
      medios.push(this.getCatMedioById(i));
    }
    return medios;
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
