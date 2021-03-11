/**
 * Created by jdominguez on 11/13/16.
 */
import {Component, Input, Output, EventEmitter} from '@angular/core';

/**
 * Componente para crear combos con leyenda utilizando Bootstrap
 *
 * @param options: any []
 *  Los datos de options deben estar de la siguiente manera:
 *
 *    {id: 1, name: 'name'}
 *
 *  El id sera regresado cuando se seleccione un opcion
 *
 */

@Component({
  selector: 'groupCombo',
  templateUrl: './groupCombo.html'
})
export  class GroupCombo {

  @Input() leyenda: string;
  @Input() options: any[] = [];
  @Input() idcombo: string;

  @Output() seleccion: EventEmitter<number> = new EventEmitter<number>();

  private leyendaOriginal: string;

  private isSelected: boolean = false;

  ngOnInit(){
    this.leyendaOriginal = this.leyenda;
  }

  selectedFunction(id){
    this.leyenda = this.leyendaOriginal;
    this.isSelected = true;
    for (var i: number = 0; i < this.options.length; i++){
      if (this.options[i].id == id){
        this.leyenda = this.leyenda + ': ' + this.options[i].name;
      }
    }
    this.seleccion.emit(id);
  }

}
