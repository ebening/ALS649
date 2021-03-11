/**
 * Created by jdominguez on 11/13/16.
 */
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { UtilService } from './util.service';
import {CatCategory} from "../model/CatCategory";

@Injectable()
export class CategoryService {

  public categs: any[] = [
    {id: 1, name: 'Perecederos'},
    {id: 2, name: 'Abarrotes'},
    {id: 3, name: 'MG'}
  ];

  getCategories(): CatCategory[]{
    let array: CatCategory[] = [];
    for (var i: number = 0; i < this.categs.length; i++){
      let cat: CatCategory = new CatCategory();
      cat.id = this.categs[i].id;
      cat.nombre = this.categs[i].name;
      array.push(cat);
    }
    return array;
  }

  getCategoryById(id: number): CatCategory{
    var cate: CatCategory;
    for (var i: number = 0; i < this.categs.length; i++){
      if (this.categs[i].id == id){
        let cat: CatCategory = new CatCategory();
        cat.id = this.categs[i].id;
        cat.nombre = this.categs[i].name;
        cate = cat;
      }
    }
    return cate;
  }
}
