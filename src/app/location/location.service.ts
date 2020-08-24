import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  public data: Observable<any>;

  constructor(private firestore: AngularFirestore) {
    this.data = this.firestore.collection('locations').valueChanges();
  }

}
