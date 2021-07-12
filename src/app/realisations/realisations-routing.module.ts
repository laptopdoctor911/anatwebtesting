import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NosrealisationsComponent } from './nosrealisations/nosrealisations.component';
import { PnadtComponent } from './pnadt/pnadt.component';
import { RealisationsComponent } from './realisations.component';
import { Realisations404Component } from './realisations404/realisations404.component';
import { SdtmComponent } from './sdtm/sdtm.component';

const routes: Routes = [
  {
    path: '', component: RealisationsComponent, children: [
      { path: 'nosrealisations', component: NosrealisationsComponent },
      { path: 'sdtm', component: SdtmComponent },
      { path: 'pnadt', component: PnadtComponent },
      
      { path: '', redirectTo: 'nosrealisations', pathMatch: 'full' },
      { path: '**', component: Realisations404Component }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RealisationsRoutingModule { }
