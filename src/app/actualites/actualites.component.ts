import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actu } from '../models/Actu.model';
import { ActuService } from '../services/actu.service';

@Component({
  selector: 'app-actualites',
  templateUrl: './actualites.component.html',
  styleUrls: ['./actualites.component.css']
})
export class ActualitesComponent implements OnInit {

  actus?: Actu[];
  currentActu?: Actu;
  currentIndex = -1;
  titre = '';
  totalActus = -1;

  page = 1;
  count = 0;
  pageSize = 3;
  pageSizes = [3, 6, 9];

  constructor(private actuService: ActuService,
              private route: ActivatedRoute,
              private router: Router,
              private activatedRoute: ActivatedRoute
              ) { }

  ngOnInit(): void {
    this.retrieveActusp();  // Get all actus any time
    //this.setActiveActu(this.currentActu, this.currentIndex)
    //console.log(this.activatedRoute.snapshot.params['id'])
  }

  getRequestParams(searchTitre: string, page: number, pageSize: number): any {
    // tslint:disable-next-line:prefer-const
    let params: any = {};

    if (searchTitre) {
      params[`titre`] = searchTitre;
    }

    if (page) {
      params[`page`] = page - 1;
    }

    if (pageSize) {
      params[`size`] = pageSize;
    }

    return params;
  }

  retrieveActusp(): void {

    const params = this.getRequestParams(this.titre, this.page, this.pageSize);
    console.log(params);
    if (this.titre === '') {
      this.actuService.getAll()
        .subscribe(
          response => {

            const actus = response.reverse();
            const totalItems = response.length;
            this.actus = actus;
            this.count = totalItems;

            //console.log(response.splice(response.length, 1));
            //console.log(response);

            console.log(this.actus);
            console.log(this.count);


          },
          error => {
            console.log(error);
          });
    } else { 
      this.actuService.getAllp(params)
        .subscribe(
          response => {

            const actus = response.reverse();
            const totalItems = response.length;
            this.actus = actus;
            this.count = totalItems;

            //console.log(response.splice(response.length, 1));
            //console.log(response);

            console.log(this.actus);
            console.log(this.count);


          },
          error => {
            console.log(error);
          });
      }
  }

  handlePageChange(event: number): void {
    this.page = event;
    this.retrieveActusp();
  }

  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.retrieveActusp();
  }

  refreshList(): void {
    this.retrieveActusp();
    this.currentActu = undefined;
    this.currentIndex = -1;
  }

  setActiveActu(actu: Actu, index: number): void {
    this.currentActu = actu;
    this.currentIndex = index;
    console.log("this current index = " + this.currentIndex);
    console.log("this current id = " + this.currentActu.id);
    //this.route.navigate(['/actualites/']); // navigate to other page   
  }

  removeAllActus(): void {
    this.actuService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchTitre(): void {
    this.actuService.findByTitre(this.titre)
      .subscribe(
        data => {
          this.actus = data;
          console.log(data);
          console.log("this.titre = " + this.titre);
        },
        error => {
          console.log(error);
        });
  }

}
