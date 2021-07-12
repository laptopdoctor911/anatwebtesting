import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { AccueilComponent } from './accueil/accueil.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { TerritoiresComponent } from './territoires/territoires.component';
//import { RealisationsComponent } from './realisations/realisations.component';
import { ProjetsComponent } from './projets/projets.component';
import { ActualitesComponent } from './actualites/actualites.component';
//import { OutilsComponent } from './outils/outils.component';
import { PartenairesComponent } from './partenaires/partenaires.component';
import { MediasComponent } from './medias/medias.component';
import { ContactComponent } from './contact/contact.component';
//import { Anatweb404Component } from './anatweb404/anatweb404.component';
import { ProduitsetservicesComponent } from './produitsetservices/produitsetservices.component';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DgComponent } from './presentation/dg/dg.component';
import { QuiComponent } from './presentation/qui/qui.component';
import { MissionsComponent } from './presentation/missions/missions.component';
import { OrganigrammeComponent } from './presentation/organigramme/organigramme.component';
//import { Presentation404Component } from './presentation/presentation404/presentation404.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
//import { AngularFontAwesomeModule} from 'angular-font-awesome';
import { faCircle,faSquare } from '@fortawesome/free-solid-svg-icons';
import { faCircle as farCircle,faSquare as farSquare } from '@fortawesome/free-regular-svg-icons';
import { faStackOverflow, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons';
/* import { AddActuComponent } from './accueil/add-actu/add-actu.component';
import { ActuDetailsComponent } from './accueil/actu-details/actu-details.component';
import { ActuListComponent } from './accueil/actu-list/actu-list.component'; */
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Anatweb404Component } from './anatweb404/anatweb404.component';
//import { PipesModule} from './accueil/pipes/pipes.module';
import { DefaultImagePipe } from './pipesMy/default-image.pipe';
import { AccueilModule } from './accueil/accueil.module';
import { RealisationsModule } from './realisations/realisations.module';

import { PipetestPipe } from './accueil/pipetest.pipe';
import { WordcountPipe } from './accueil/wordcount.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

//import { MaterialModule } from './shared/modules/material/material.module';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from "@angular/material/input";


@NgModule({
  declarations: [
    AppComponent,
    //AccueilComponent,
    //TerritoiresComponent,
    //RealisationsComponent,
    ProjetsComponent,
    ActualitesComponent,
    //OutilsComponent,
    PartenairesComponent,
    MediasComponent,
    ContactComponent,
    Anatweb404Component,
    ProduitsetservicesComponent,
    DefaultImagePipe,
    /* AddActuComponent,
    ActuDetailsComponent,
    ActuListComponent, */
    /* DgComponent,
    QuiComponent,
    MissionsComponent,
    OrganigrammeComponent, */
   // PresentationComponent,
   //SafePipe
   //PipetestPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //NgbModule,
    //MaterialModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    
   // PipesModule,
    /* AccueilModule,
    RealisationsModule, */

    NgxPaginationModule,
    MatSliderModule,
    MatButtonModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
