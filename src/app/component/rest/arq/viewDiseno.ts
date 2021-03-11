/**
 * Created by jdominguez on 12/8/16.
 */


import {Component, trigger, state, style, Input, transition, animate, Output, EventEmitter} from "@angular/core";
import {DragulaService} from "ng2-dragula/components/dragula.provider";
import {ArqListTable} from "../../../model/alsuper/ArqListTable";
@Component({
  selector: 'viewDiseno',
  templateUrl: './viewDiseno.html',
  styleUrls: ['../../../../resources/css/admespacios.css'],
  animations: [
    trigger('visibilityChanged', [
      state('shown', style({opacity: 1})),
      state('hidden', style({opacity: 0})),
      transition('* => *', animate('1s'))
    ])
  ]
})
export class ViewDiseno {

  private IMG_AUX: string = '../../../../resources/images/principal/odMasterFondo.png';

  @Input() isVisible: boolean = false;
  @Input() paginas: ArqListTable[] = [];
  @Output() bttnBackAction: EventEmitter<boolean> = new EventEmitter<boolean>();
  private visibility: string = 'hidden';

  private pageIndex: number = 0;
  private totalPages: number = 0;

  constructor(private dragulaService: DragulaService){
    dragulaService.setOptions('first-bag', {
      revertOnSpill: true
    });
    dragulaService.dropModel.subscribe((value) => {
      console.log('Drop: ' + value);
      this.onDropModel(value.slice(1));
    });
  }

  ngOnInit(){
    if (this.paginas.length > 0){
      this.totalPages = this.paginas.length - 1;
    }
  }

  onDropModel(args){
    for (var i: number = 0; i < this.paginas[this.pageIndex].rows.length; i++){
      this.paginas[this.pageIndex].rows[i].numero = i + 1;
    }
  }

  onForwardPageBttn(){
    this.pageIndex += 1;
  }

  onBackPageBttn(){
    this.pageIndex -= 1;
  }

  ngOnChanges(){
    this.visibility = this.isVisible ? 'shown' : 'hidden';
  }

  backButtonAction(){
    this.isVisible = false;
    this.bttnBackAction.emit(true);
  }
}
