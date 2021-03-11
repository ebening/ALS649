/**
 * Created by jdominguez on 11/12/16.
 */
import {Injectable, Inject} from '@angular/core';
import { Http, Headers } from '@angular/http';
import { UtilService } from './util.service';
import {CatPrograma} from "../model/CatPrograma";

@Injectable()
export class ProgramaService {

  getProgramasByEvento(id: number): CatPrograma[]{
    let progs: CatPrograma[] = [];
    for (var i: number = 1; i < 4; i++){
      progs.push(this.getProgramaById(i));
    }
    return progs;
  }

  getProgramaById(id: number): CatPrograma {
    let p: CatPrograma = new CatPrograma();
    p.id = id;
    p.nombre = 'Programa ' + id;
    return p;
  }
}
