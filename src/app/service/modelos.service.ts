import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import Modelo from '../interfaces/modelo.interface';

@Injectable({
  providedIn: 'root'
})
export class ModelosService {

  constructor(private firestore: Firestore) { }

  addPlace(place: Modelo) {
    const placeRef = collection(this.firestore, 'costoDeModelos');
    return addDoc(placeRef, place);
  }

  getPlaces(): Observable<Modelo[]> {
    const placeRef = collection(this.firestore, 'costoDeModelos');
    return collectionData(placeRef, { idField: 'id' }) as Observable<Modelo[]>;
  }

  deletePlace(place: Modelo) {
    const placeDocRef = doc(this.firestore, `costoDeModelos/${place.id}`);
    return deleteDoc(placeDocRef);
  }

}
