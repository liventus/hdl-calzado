import { Timestamp } from 'firebase/firestore';



export default interface Modelo {
  id?: string;
  modelo: string;
  latitude: number;
  longitude: number;
  description: string;
  image: string;
  resumen: any[];
  fecha: Timestamp;
}
