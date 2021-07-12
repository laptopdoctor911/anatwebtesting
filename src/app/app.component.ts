import { Component } from '@angular/core';
import { 
  faCoffee, faHome, faTools, faInfo, faInfoCircle, faPhone,
  faProjectDiagram, faFlag, faCheckCircle, faAddressCard, faClock,
  faBullhorn, faMapMarker, faShareAlt, faPenAlt, faMap, faAt, faRoad
} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebook, faTwitter, faGooglePlusG, faYoutube, faLinkedin, faLinkedinIn, 
} from '@fortawesome/free-brands-svg-icons';
import { 
  faEnvelope,
} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'anatweb';
  faCoffee = faCoffee;
    faHome = faHome;
    faTools = faTools;
    faInfo = faInfo;
    faInfoCircle = faInfoCircle;
    faProjectDiagram = faProjectDiagram;
    faFlag  = faFlag;
    faCheckCircle = faCheckCircle;
    faAddressCard = faAddressCard;
    faclock = faClock;
    fabullhorn = faBullhorn;
    famapmarker = faMapMarker;
    fasharealt = faShareAlt;
    fapenalt = faPenAlt;
    famap = faMap;
    faphone = faPhone;
    faat = faAt;
    faroad = faRoad;

    fafacebook = faFacebook; 
    fatwitter = faTwitter;
    googleplusg =faGooglePlusG;
    fayoutube =  faYoutube;
    falinkedinIn = faLinkedinIn;
    falinkedin = faLinkedin;
    

    faenvelope = faEnvelope;

}
