import { Timestamp } from 'firebase/firestore';



export default interface CostoModelo {
  id?: string;
  modelo: string;
  codigoModelo: String;
  nombreModelo: String;
  urlimg:String;
  latitude: number;
  longitude: number;
  description: string;
  image: string;
  resumen: any[];
  fecha: Timestamp;
}
