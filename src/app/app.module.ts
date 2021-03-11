import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routing } from './app.routing';

/* ####### Components ########### */
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login';


/* ########## Arquitectura ########## */
import { TabArq } from './component/rest/arq/tabarq';
import { TabMecas } from './component/rest/arq/tabMecas';
import { EventoArq } from './component/rest/arq/eventoarq';
import { ArqMecanica } from './component/rest/arq/arqmecanica';
import {OfertasView} from "./component/rest/arq/ofertasView";

import { PrincipalComponent } from './component/rest/principal';
import { PrincipalLogoComponent } from './component/rest/principalLogo';
import { MenuHorizontalComponent } from './component/rest/menuHorizontal';
import { MenuVerticalComponent } from './component/rest/menuVertical';
import { TabMedios } from './component/rest/arq/tabmedios';
import {AdmEspaciosComponent} from "./component/rest/arq/admespacios";
import {ViewDiseno} from "./component/rest/arq/viewDiseno";

/* ########## Administracion ######### */
import {UsersComponent} from "./component/rest/adm/users";
import {ProfilesModal} from './component/rest/adm/profilesModal';

/* ******** Compartidos ************ */
import { ListaSelect } from './component/rest/shared/listaSelect';
import { GroupCombo } from './component/rest/shared/groupCombo';
import { AlertModal } from './shared/modal.custom';
import { Encontruccion } from './shared/encontruccion';
import {FileUploadModule} from "ng2-file-upload";
import {MomentModule} from "angular2-moment";

/* ####### Services ############# */
import { Persistence } from './service/persistence';

import {LoginService} from "./service/login.service";
import {EtiquetaService} from "./service/etiquetas.service";
import { EventoService } from "./service/evento.service";
import { UtilService } from "./service/util.service";
import { ListaService } from "./service/listas.service";
import { ProgramaService } from "./service/programa.service";
import { CategoryService } from './service/category.service';
import {SubCategoryService} from "./service/subcategory.service";
import {CatItemService} from "./service/catitem.service";
import { CatMedioService } from "./service/catmedio.service";
import {UserService} from "./service/usuarios.service";
import {UserActionService} from "./service/useraction.service";
import {MenuService} from "./service/menu.service";

/* ####### UI Components ######### */
import { TabsModule } from './component/tabs/tabs.module';
import { MultiselectDropdownModule } from './component/rest/shared/multiselect-dropdown';
import {DragulaModule} from "ng2-dragula/ng2-dragula";
import {FileDropModule} from 'angular2-file-drop';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GroupCombo,

    // ***** Componentes Generales ******* //
    PrincipalLogoComponent,
    PrincipalComponent,
    MenuVerticalComponent,
    MenuHorizontalComponent,
    ListaSelect,
    AlertModal,
    Encontruccion,
    UsersComponent,


    // ***** Componentes Arquitectura ****** //
    TabArq,
    TabMecas,
    EventoArq,
    ArqMecanica,
    OfertasView,
    TabMedios,
    AdmEspaciosComponent,
    ViewDiseno,

    // ********* Administracion *********** //
    ProfilesModal

    // ********* Configuracion Medios ******** //

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing,
    TabsModule,
    MultiselectDropdownModule,
    FileUploadModule,
    MomentModule,
    DragulaModule,
    FileDropModule
  ],
  providers: [
    Persistence,
    UtilService,
    EtiquetaService,
    EventoService,
    ListaService,
    ProgramaService,
    CategoryService,
    SubCategoryService,
    CatItemService,
    CatMedioService,
    UserService,
    UserActionService,
    MenuService,
    LoginService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
