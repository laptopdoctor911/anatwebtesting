import { Component, OnInit } from '@angular/core';
import { Actu } from '../..//models/Actu.model';
import { ActuService } from 'src/app/services/actu.service';

@Component({
  selector: 'app-add-actu',
  templateUrl: './add-actu.component.html',
  styleUrls: ['./add-actu.component.css']
})
export class AddActuComponent implements OnInit {

  actu: Actu = {
    titre: '',
    chapeau: undefined,
    fichier: '',
    rubrique: '',
    edidate: '',
    image: '',
    status: false,
    video: '',
    hash: '',
    source: ''
  };
  submitted = false;

  constructor(private actuService: ActuService) { }

  ngOnInit(): void {
  }

  saveActu(): void {
    const data = {
      titre: this.actu.titre,
      chapeau: this.actu.chapeau,
      fichier: this.actu.fichier,
      rubrique: this.actu.rubrique,
      edidate: this.actu.edidate,
      image: this.actu.image,
      video: this.actu.video,
      hash: this.actu.hash,
      source: this.actu.source
    };

    this.actuService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newActu(): void {
    this.submitted = false;
    this.actu = {
      titre: '',
      chapeau: undefined,
      status: false,
      fichier: '',
      rubrique: '',
      edidate: '',
      image: '',
      video: '',
      hash: '',
      source: ''
    };
  }

}
