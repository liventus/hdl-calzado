import {Timestamp} from "rxjs";
import firebase from "firebase/app";


export default interface CostoModelo {
  id?: string;
  modelo: string;
  latitude: number;
  longitude: number;
  description: string;
  image: string;
  resumen: any[];
  fecha: Date | null;
}
