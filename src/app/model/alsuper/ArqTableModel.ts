import {CatItem} from "../CatItem";
/**
 * Created by jdominguez on 11/24/16.
 */


export class ArqTableModel {

  public numero:number;
  public area: number;
  public grupoArt: number;
  public subSeg: string;
  public items: CatItem[] = [];
  public precioOferta: number;
  public preciazoClub: string;
  public vigencia: string;
  public obs: string;
  public isSelected: boolean = false;
  public imageURL: string = '../../../../resources/images/principal/odMasterFondo.png';

  public getCodigoBarras(): string {
    var str: string = '';
    if (this.items.length == 1){
      str = this.items[0].upc;
    }else{
      str = 'Varios';
    }
    return str;
  }

  public getPresentacion(): string {
    var str: string = '';
    for (var i: number = 0; i < this.items.length; i++){
      if (str.includes(this.items[i].presentacion) == false){
        str = str + this.items[i].presentacion + ',';
      }
    }
    return str;
  }
}
