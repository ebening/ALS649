/**
 * Created by jdominguez on 11/10/16.
 */

import { CatSubcategory } from './CatSubcategory';

export class CatCategory {
  public id: number;
  public nombre: string;
  public subs: CatSubcategory[];
}
