import { Component, OnInit } from '@angular/core';
import { ActuService } from 'src/app/services/actu.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Actu } from '../../models/actu.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-actu-details',
  templateUrl: './actu-details.component.html',
  styleUrls: ['./actu-details.component.css']
})
export class ActuDetailsComponent implements OnInit {

  currentActu: Actu = {
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
  message = '';
  htmlFileUrl: any;
  videoFileUrl: any;
  startend: any[];
  //sanitizer: any;
  //https://angular.io/guide/security#xss
  constructor(
    private sanitizer: DomSanitizer,
    private actuService: ActuService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getActu(this.route.snapshot.params.id);
  }

  getActu(id: string): void {
    this.actuService.get(id)
      .subscribe(
        data => {
          this.currentActu = data;
          console.log(data);
          //This html file is always defined
          //this.htmlFileUrl = "http://anat.sn/articles/data/anat_actus/" + this.currentActu.hash + "/" + this.currentActu.fichier;
          this.htmlFileUrl = this.sanitizer.bypassSecurityTrustResourceUrl("http://localhost:8090/anatweb/articles/data/anat_actus/" + this.currentActu.hash + "/" + this.currentActu.fichier);
          // VideoFileUrl
           if (this.currentActu.video !== "undefined") {
            this.startend = this.currentActu.video_timestamp.split("-");
            if (this.startend[0] !== "undefined") {
              //this.videoFileUrl = this.currentActu.video + "/?start=" + this.startend[0] + "&end=" + this.startend[1] + "&rel=0&modestbranding=1";
              this.videoFileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.currentActu.video + "/?start=" + this.startend[0] + "&end=" + this.startend[1] + "&rel=0&modestbranding=1");
              //console.log("this.startend[0] = " + this.startend[0]);
            } else {
              this.videoFileUrl = this.currentActu.video;
              this.videoFileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.currentActu.video);
            }

            //// $videoUrl = $data["video"]."/?start=".$split[0]."&end=".$split[1]."&rel=0&modestbranding=1";

            console.log("YES VIDEO... = " + this.videoFileUrl);
          } else {// no video
            this.videoFileUrl = "undefined"; //PUT AN IMG
              console.log("NO VIDEO... = " + this.currentActu.video)
          }
          //return this.videoFileUrl;
        },
        error => {
          console.log(error);
          //return error;
        });


  }

  getSafevideoUlr () {
    return this.videoFileUrl;
  }
  getSafeHtmlUlr () {
    return this.htmlFileUrl;
  }

  updatestatus(status: boolean): void {
    const data = {
      //id: this.currentActu.id,
      titre: this.currentActu.titre,
      chapeau: this.currentActu.chapeau,
      fichier: this.currentActu.fichier,
      rubrique: this.currentActu.rubrique,
      edidate: this.currentActu.edidate,
      image: this.currentActu.image,
      status: status,
      video: this.currentActu.video,
      hash: this.currentActu.hash,
      source: this.currentActu.source
    };

    this.actuService.update(this.currentActu.id, data)
      .subscribe(
        response => {
          this.currentActu.status = status;
          console.log(response);
          this.message = response.message;
        },
        error => {
          console.log(error);
        });
  }

  updateActu(): void {
    this.actuService.update(this.currentActu.id, this.currentActu)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message;
        },
        error => {
          console.log(error);
        });
  }

  deleteActu(): void {
    this.actuService.delete(this.currentActu.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/actus']);
        },
        error => {
          console.log(error);
        });
  }

}
