
/**
 * Created by jdominguez on 11/16/16.
 */
import {Injectable} from "@angular/core";
import {CatSubcategory} from "../model/CatSubcategory";

@Injectable()
export class SubCategoryService {

  public subcategs: any[] = [
    {id: 1, name:'Frutas y Verduras', idcat: 1},
    {id: 2, name:'Carnes', idcat: 1},
    {id: 3, name:'Salchichoneria', idcat: 1},
    {id: 4, name:'Lacteos', idcat: 1},
    {id: 5, name:'Pescados', idcat: 1},
    {id: 6, name:'Congelados', idcat: 1},
    {id: 7, name:'Alimentos', idcat: 1},
    {id: 8, name:'Panaderia', idcat: 1},
    {id: 9, name:'Abarrotes Comestibles', idcat: 2},
    {id: 10, name:'Cereales', idcat: 2},
    {id: 11, name:'Galletas', idcat: 2},
    {id: 12, name:'Bebidas', idcat: 2},
    {id: 13, name:'Botanas', idcat: 2},
    {id: 14, name:'Perfumeria', idcat: 2},
    {id: 15, name:'Bebes', idcat: 2},
    {id: 16, name:'Limpieza', idcat: 2},
    {id: 17, name:'Higienicos', idcat: 2},
    {id: 18, name:'Abarrotes No Comestibles', idcat: 2},
    {id: 19, name:'Farmacia', idcat: 2},
    {id: 20, name:'Cerveza', idcat: 2},
    {id: 21, name:'Licores', idcat: 2},
    {id: 22, name:'MiMarca – MyBrand', idcat: 2},
    {id: 23, name:'Importados', idcat: 2},
    {id: 24, name:'Mercancías Generales', idcat: 3},
  ];


  getSubCategoByIdCatego(id: number): CatSubcategory[]{
    let array: CatSubcategory[] = [];
    for (var i: number = 0; i < this.subcategs.length; i++){
      if (this.subcategs[i].idcat == id){
        let s: CatSubcategory = new CatSubcategory();
        s.id = this.subcategs[i].id;
        s.nombre = this.subcategs[i].name;
        array.push(s);
      }
    }
    return array;
  }

  getSubCategoById(id: number): CatSubcategory{
    var sub: CatSubcategory;
    for (var i: number = 0; i < this.subcategs.length; i++){
      if (this.subcategs[i].id == id){
        let s: CatSubcategory = new CatSubcategory();
        s.id = this.subcategs[i].id;
        s.nombre = this.subcategs[i].name;
        sub = s;
      }
    }
    return sub;
  }

  getSubCategoByName(name: string): CatSubcategory {
    var sub: CatSubcategory;
    for (var i: number = 0; i < this.subcategs.length; i++){
      if (this.subcategs[i].name.toUpperCase() == name.toUpperCase()){
        let s: CatSubcategory = new CatSubcategory();
        s.id = this.subcategs[i].id;
        s.nombre = this.subcategs[i].name;
        sub = s;
        break;
      }
    }
    return sub;
  }
}
