/**
 * Created by jdominguez on 11/7/16.
 */
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './component/login';
import { TabArq } from './component/rest/arq/tabarq';
import { PrincipalComponent } from './component/rest/principal';
import { PrincipalLogoComponent } from './component/rest/principalLogo';
import {EventoArq} from "./component/rest/arq/eventoarq";
import { UsersComponent } from "./component/rest/adm/users";

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: LoginComponent
  },
  {
    path: 'principal',
    component: PrincipalComponent,
    children: [
      {
        path: '',
        component: PrincipalLogoComponent
      },
      {
        path: 'tabarq',
        component: TabArq
      },
      { // Path Nuevo Festival
        path: 'nuevo',
        component: EventoArq
      },
      {
        path: 'users',
        component: UsersComponent
      }

    ]
  }
]

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
