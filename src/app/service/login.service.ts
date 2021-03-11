/**
 * Created by jdominguez on 11/8/16.
 */
import { Injectable } from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import { UtilService } from './util.service';
import {Observable} from "rxjs";

@Injectable()
export class LoginService {

  constructor(private http: Http, private util: UtilService){}

  login(model): Observable<Response>{
    let tokenUrl = this.util.geturl() + "public/login";
    let headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post(tokenUrl, JSON.stringify(model), {headers: headers});
  }

  getLoggedUser(username: string): Observable<Response>{
    let fullPath: string = this.util.geturl() + "rest/users/afterLogin";
    let headers = new Headers({'Authorization':'Bearer ' + localStorage.getItem("token")});
    return this.http.post(fullPath, JSON.stringify(username) ,{headers: headers});
  }

  logout(){
    localStorage.setItem("token","");
    localStorage.setItem("currentUserName", '');
  }

  checkLogin(){
    if (localStorage.getItem("loggedUser") != null &&
        localStorage.getItem("token") != null &&
        localStorage.getItem("token") != ''){

      return true;
    }else{
      return false;
    }
  }
}

