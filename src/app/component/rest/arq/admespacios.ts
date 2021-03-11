/**
 * Created by jdominguez on 12/8/16.
 */


import {Component, animate, transition, style, state, trigger} from "@angular/core";
import {UtilService} from "../../../service/util.service";
import {ArqTableModel} from "../../../model/alsuper/ArqTableModel";
import {ArqListTable} from "../../../model/alsuper/ArqListTable";
import {CategoryService} from "../../../service/category.service";
import {SubCategoryService} from "../../../service/subcategory.service";
@Component({
  selector: 'admespacios',
  templateUrl: './admespacios.html',
  styleUrls: ['../../../../resources/css/admespacios.css'],
  animations: [
    trigger('mostrar', [
      state('shown', style({opacity: 1})),
      state('hidden', style({opacity: 0})),
      transition('* => *', animate('1s'))
    ])
  ]
})
export class AdmEspaciosComponent{

  private mostrar: string = 'shown';
  private hiddenPage: boolean = true;

  private rows: ArqListTable[] = [];

  constructor(
      private util: UtilService,
      private categoService: CategoryService,
      private subCategoService: SubCategoryService){}

  ngOnInit(){
      this.rows = this.util.getListTableModel();
  }

  changePage(event){
    this.hiddenPage = !this.hiddenPage;
    this.mostrar = this.hiddenPage ? 'shown' : 'hidden';
  }

}
