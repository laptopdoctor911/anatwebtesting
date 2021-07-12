import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actu } from '../../models/Actu.model';
import { ActuService } from '../../services/actu.service';

@Component({
  selector: 'app-actu-list',
  templateUrl: './actu-list.component.html',
  styleUrls: ['./actu-list.component.css']
})
export class ActuListComponent implements OnInit {

  actus?: Actu[];
  currentActu?: Actu;
  currentIndex = -1;
  titre = '';
  totalActus = -1;

  constructor(private actuService: ActuService,
              private route: ActivatedRoute,
              private router: Router,
              private activatedRoute: ActivatedRoute
              ) { }

  ngOnInit(): void {
    this.retrieveActus();  // Get all actus any time
    //this.setActiveActu(this.currentActu, this.currentIndex)
    //console.log(this.activatedRoute.snapshot.params['id'])
  }

  retrieveActus(): void {
    this.actuService.getAll()
      .subscribe(
        data => {
          this.actus = data.slice(this.totalActus-2).reverse();// we only need the 4 last rows
          this.totalActus = data.length;
          console.log(data);
          //console.log("my length = " + data.length);

        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveActus();
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

  searchtitre(): void {
    this.actuService.findByTitre(this.titre)
      .subscribe(
        data => {
          this.actus = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  
}
