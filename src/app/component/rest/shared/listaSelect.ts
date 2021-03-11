/**
 * Created by jdominguez on 11/12/16.
 */
import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'listaSelect',
  templateUrl: './listaSelect.html',
  styleUrls: ['../../../../resources/css/rest/compartido/listaSelect.css']
})
export class ListaSelect {
  @Output() idSelected: EventEmitter<number[]> = new EventEmitter<number[]>();

  @Input() titulo: string = 'Titulo';
  @Input() items: any[] = [];

  arrayIds: number[];

  clickSelected(id: number){
    if (this.arrayIds == null){
      this.arrayIds = [];
    }
    if (this.arrayIds.indexOf(id) === -1){
      this.arrayIds.push(id);
    }
    this.idSelected.emit(this.arrayIds);
  }

}
