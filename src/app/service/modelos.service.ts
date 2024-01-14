import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import CostoModelo from '../interfaces/costomodelo.interface';

@Injectable({
  providedIn: 'root'
})
export class ModelosService {

  constructor(private firestore: Firestore) { }

  addPlace(place: CostoModelo) {
    const placeRef = collection(this.firestore, 'costoDeModelos');
    return addDoc(placeRef, place);
  }

  getPlaces(): Observable<CostoModelo[]> {
    const placeRef = collection(this.firestore, 'costoDeModelos');
    return collectionData(placeRef, { idField: 'id' }) as Observable<CostoModelo[]>;
  }

  deletePlace(place: CostoModelo) {
    const placeDocRef = doc(this.firestore, `costoDeModelos/${place.id}`);
    return deleteDoc(placeDocRef);
  }

}
