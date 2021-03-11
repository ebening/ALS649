/**
 * Created by jdominguez on 12/14/16.
 */

import {Component} from "@angular/core";
import {UtilService} from "../../../service/util.service";
@Component({
    selector: 'users',
    templateUrl: './users.html',
    styleUrls: ['../../../../resources/css/rest/adm/users.css']
})
export class UsersComponent {

    constructor(private util: UtilService){}

    onProfilesBttn(){
        this.util.openCustomAlert('bttnOpenProfileModal');
    }

}