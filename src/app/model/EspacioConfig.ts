/**
 * Created by jdominguez on 11/21/16.
 */

import {TblMecanica} from "../model/TblMecanica";
import {CatSubcategory} from "../model/CatSubcategory";
import {CatCategory} from "./CatCategory";

export class EspacioConfig {
  id: number;
  hoja: number;
  espacio: number;
  mecanica: TblMecanica;
  categoria: CatCategory;
  subcategory: CatSubcategory;
  isSelected: boolean = false;
}
