import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { Anatweb404Component } from './anatweb404/anatweb404.component';
import { ActualitesComponent } from './actualites/actualites.component';
import { ContactComponent } from './contact/contact.component';
import { MediasComponent } from './medias/medias.component';
import { OutilsComponent } from './outils/outils.component';
import { PartenairesComponent } from './partenaires/partenaires.component';
import { DgComponent } from './presentation/dg/dg.component';
import { MissionsComponent } from './presentation/missions/missions.component';
import { OrganigrammeComponent } from './presentation/organigramme/organigramme.component';
import { PresentationComponent } from './presentation/presentation.component';
import { QuiComponent } from './presentation/qui/qui.component';
import { ProduitsetservicesComponent } from './produitsetservices/produitsetservices.component';
import { ProjetsComponent } from './projets/projets.component';
import { RealisationsComponent } from './realisations/realisations.component';
import { TerritoiresComponent } from './territoires/territoires.component';
import { ActuDetailsComponent } from './accueil/actu-details/actu-details.component';

const routes: Routes = [
 // { path: 'accueil', component: AccueilComponent },
  { path: 'accueil', loadChildren: () => import(`./accueil/accueil.module`).then(m => m.AccueilModule) },
  { path: 'presentation', loadChildren: () => import(`./presentation/presentation.module`).then(m => m.PresentationModule) },
  { path: 'actualites', component: ActualitesComponent },
  { path: 'actualites/:id', component: ActuDetailsComponent },
  //{ path: 'actualites/:id', component: ActualitesComponent },
  //{ path: 'territoires', component: TerritoiresComponent },
  { path: 'territoires', loadChildren: () => import(`./territoires/territoires.module`).then(m => m.TerritoiresModule) },
  //{ path: 'realisations', component: RealisationsComponent },
  { path: 'realisations', loadChildren: () => import(`./realisations/realisations.module`).then(m => m.RealisationsModule) },

  { path: 'projets', component: ProjetsComponent },
  { path: 'produitsetservices', component: ProduitsetservicesComponent },
  { path: 'outils', loadChildren: () => import(`./outils/outils.module`).then(m => m.OutilsModule) },
  { path: 'medias', component: MediasComponent },
  { path: 'partenaires', component: PartenairesComponent },
  { path: 'contact', component: ContactComponent },
    //presentation
  /* { path: 'dg', component: DgComponent },
  { path: 'qui', component: QuiComponent },
  { path: 'missions', component: MissionsComponent },
  { path: 'organigramme', component: OrganigrammeComponent }, */
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: '**', component: Anatweb404Component },
];


/* 
@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: true })],
  exports: [RouterModule]
})
*/


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    enableTracing: false 
  })],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
