import { Text } from "@angular/compiler/src/i18n/i18n_ast";
//import { Timestamp } from "rxjs";

export class Actu {
  id?: any;
  titre?: string;
  chapeau?: Text;
  fichier?: string;
  rubrique?: string;
  edidate?: string;
  editeur?: number;
  image?: string;
  status?: boolean;
  video?: string;
  video_timestamp?: string;
  hash?: string;
  source?: string
}
