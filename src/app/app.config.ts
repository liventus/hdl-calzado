import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimations(), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"administracion-calzado","appId":"1:66972544134:web:6625a6d6cedfdd3834b507","databaseURL":"https://administracion-calzado-default-rtdb.firebaseio.com","storageBucket":"administracion-calzado.appspot.com","apiKey":"AIzaSyB5pVckizr0DXQbrQfiuWbvm--RNKb-tSw","authDomain":"administracion-calzado.firebaseapp.com","messagingSenderId":"66972544134","measurementId":"G-EVHDNKR34Y"}))), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
