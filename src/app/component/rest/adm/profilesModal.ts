/**
 * Created by jdominguez on 12/14/16.
 */
import {Injectable, Component, Input, ChangeDetectionStrategy} from "@angular/core";
import {Usuarios} from "../../../model/Usuarios";

@Injectable()
@Component({
    selector: 'profilesModal',
    templateUrl: 'profilesModal.html',
    changeDetection: ChangeDetectionStrategy.Default
})
export class ProfilesModal {

    @Input() idmodal: string = 'profileModal';
    @Input() idBttn: string = 'bttnOpenProfileModal';
    @Input() warning: boolean;
    @Input() success: boolean;
    @Input() info: boolean;
    @Input() danger: boolean;

    constructor(){}

}