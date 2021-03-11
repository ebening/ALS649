/**
 * Created by jdominguez on 11/16/16.
 */
import {Injectable} from "@angular/core";
import {CatItem} from "../model/CatItem";

@Injectable()
export class CatItemService {

  getItemsByCatego(id: number): CatItem[]{
    let array: CatItem[] = [];
    for (var i: number = 1; i < 31; i++){
      let item: CatItem = new CatItem();
      item.id = (i * 10) + 1;
      item.descripcion = 'Articulo ' + i;
      item.precioRegular = 30.50;
      item.marca = 'Acme';
      item.modelo = '2016';
      item.presentacion = '1 Lt';
      item.upc = '87125346';
      array.push(item);
    }
    return array;
  }

  getItemsBySubCatego(id: number): CatItem[]{
    let array: CatItem[] = [];
    for (var i: number = 1; i < 11; i++){
      let item: CatItem = new CatItem();
      item.id = (i * 10) + 1;
      item.descripcion = 'Articulo ' + i;
      item.precioRegular = 30.50;
      item.marca = 'Acme';
      item.modelo = '2016';
      item.presentacion = '1 Lt';
      item.upc = '87125346';
      array.push(item);
    }
    return array;
  }

  getItemById(id: number): CatItem{
    let item: CatItem = new CatItem();
    item.id = id;
    item.descripcion = 'Articulo ' + id;
    item.precioRegular = Math.floor(Math.random() * 250);
    item.marca = 'Acme';
    item.modelo = '2016';
    item.presentacion = '1 Lt';
    item.upc = '87125346';
    return item;
  }
}
