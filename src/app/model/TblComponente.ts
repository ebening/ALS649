/**
 * Created by jdominguez on 11/10/16.
 */

import { CatItem } from './CatItem';

export class TblComponente {
  public id: number;
  public compraMinima: number = 0;
  public abastoInicial: number = 0;
  public objetivo: number = 0;
  public numero: number = 0;
  public precioPromocion: number = 0.00;
  public porcentajeDesc: number = 0.00;
  public items: CatItem[];
  public categoName: string = '';
  public subCategoName: string = '';
}
