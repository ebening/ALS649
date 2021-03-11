/**
 * Created by jdominguez on 11/13/16.
 */
import {Component, Input, ChangeDetectionStrategy, Injectable} from '@angular/core';

@Injectable()
@Component({
  selector: 'alertModal',
  templateUrl: './modal.custom.html',
  changeDetection: ChangeDetectionStrategy.Default
})
export class AlertModal {

  @Input() titulo: string;
  @Input() mensaje: string;
  @Input() idmodal: string = 'mymodal';
  @Input() idBttn: string = 'bttnOpenModal';

  @Input() warning: boolean;
  @Input() success: boolean;
  @Input() info: boolean;
  @Input() danger: boolean;

  constructor(){

  }
}
