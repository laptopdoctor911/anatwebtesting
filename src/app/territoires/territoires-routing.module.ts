import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { SenegalComponent } from './senegal/senegal.component';
import { TerritoiresComponent } from './territoires.component';
import { Territoires404Component } from './territoires404/territoires404.component';
import { RessourcesComponent } from './ressources/ressources.component';

//const routes: Routes = [];

const routes: Routes = [
  {
    path: '', component: TerritoiresComponent, children: [
      { path: 'senegal', loadChildren: () => import(`./senegal/senegal.module`).then(m => m.SenegalModule) },
      { path: 'ressources', component: RessourcesComponent },
      { path: '', redirectTo: 'senegal', pathMatch: 'full' },
      { path: '**', component: Territoires404Component }
    ]
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TerritoiresRoutingModule { }
