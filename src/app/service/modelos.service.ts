import { Injectable } from '@angular/core';
import {Firestore, collection, addDoc, collectionData, doc, deleteDoc, getDoc, docData} from '@angular/fire/firestore';
import {catchError, from, map, Observable, of, pipe} from 'rxjs';
import CostoModelo from '../interfaces/costomodelo.interface';
import Modelo from "../interfaces/modelo.interface";

@Injectable({
  providedIn: 'root'
})
export class ModelosService {


  constructor(private firestore: Firestore) { }



  getCostoModelos(): Observable<CostoModelo[]> {
    const costoModelosRef = collection(this.firestore, 'costoDeModelos');
    return collectionData(costoModelosRef, { idField: 'id' }) as Observable<CostoModelo[]>;
  }

  getModelos(): Observable<Modelo[]> {
    const modelosRef = collection(this.firestore, 'modelos');
    return collectionData(modelosRef, { idField: 'id' }) as Observable<Modelo[]>;
  }

  getModeloPorId(modeloId: string): Observable<Modelo | undefined> {
    const modeloRef = doc(this.firestore, 'modelos', modeloId);

    return from(docData(modeloRef)).pipe(
      map((modeloData) => {
        if (modeloData) {
          return { id: modeloId, ...modeloData } as Modelo;
        } else {
          return undefined;
        }
      })
    );
  }



}
