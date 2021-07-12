import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Accueil404Component } from './accueil404/accueil404.component';
import { AccueilComponent } from './accueil.component';
import { ActuDetailsComponent } from './actu-details/actu-details.component';
import { ActuListComponent } from './actu-list/actu-list.component';
import { AddActuComponent } from './add-actu/add-actu.component';

//const routes: Routes = [];
const routes: Routes = [
  {
    path: '', component: AccueilComponent, children: [
      { path: 'actu-list', component: ActuListComponent },
      //{ path: 'actu-list/:id', component: ActuDetailsComponent },
      //{ path: 'actu-details/:id', component: ActuDetailsComponent },
      { path: 'add-actu', component: AddActuComponent },
      { path: '', redirectTo: 'accueil', pathMatch: 'full' },
      { path: '**', component: Accueil404Component }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccueilRoutingModule { }
