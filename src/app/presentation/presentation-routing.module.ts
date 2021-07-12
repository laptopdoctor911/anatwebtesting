import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DgComponent } from './dg/dg.component';
import { MissionsComponent } from './missions/missions.component';
import { OrganigrammeComponent } from './organigramme/organigramme.component';
import { QuiComponent } from './qui/qui.component';
import { PresentationComponent } from './presentation.component';
import { Presentation404Component } from './presentation404/presentation404.component';


const routes: Routes = [
  {
    path: '', component: PresentationComponent, children: [
      { path: 'dg', component: DgComponent },
      { path: 'qui', component: QuiComponent },
      { path: 'missions', component: MissionsComponent },
      { path: 'organigramme', component: OrganigrammeComponent },
      { path: '', redirectTo: 'dg', pathMatch: 'full' },
      { path: '**', component: Presentation404Component }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PresentationRoutingModule { }
