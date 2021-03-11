/**
 * Created by jdominguez on 11/16/16.
 */

import {Component} from "@angular/core";
import {Persistence} from "../../../service/persistence";
@Component({
  selector: 'tabMecas',
  templateUrl: './tabMecas.html'
})
export class TabMecas {

  constructor(private persistence: Persistence){}


}
