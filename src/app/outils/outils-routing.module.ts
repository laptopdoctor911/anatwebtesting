import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmenagementComponent } from './amenagement/amenagement.component';
import { AppcartoComponent } from './appcarto/appcarto.component';
import { CartographieComponent } from './cartographie/cartographie.component';
import { DeveloppementComponent } from './developpement/developpement.component';
import { GeodesieComponent } from './geodesie/geodesie.component';
import { OcniComponent } from './ocni/ocni.component';
import { OutilsComponent } from './outils.component';
import { Outils404Component } from './outils404/outils404.component';

const routes: Routes = [
  {
    path: '', component: OutilsComponent, children: [
      { path: 'amenagement', component: AmenagementComponent },
      { path: 'developpement', component: DeveloppementComponent },
      { path: 'cartographie', component: CartographieComponent },
      { path: 'geodesie', component: GeodesieComponent },
      { path: 'appcarto', component: AppcartoComponent },
      { path: 'ocni', component: OcniComponent },
      { path: '', redirectTo: 'amenagement', pathMatch: 'full' },
      { path: '**', component: Outils404Component }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OutilsRoutingModule { }
