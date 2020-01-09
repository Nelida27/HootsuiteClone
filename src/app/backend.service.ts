import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import {environment} from '../environments/environment';




@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(public db: AngularFirestore) { }
  getConfig(){
    return environment.social;
  }

  addUser(value){
    return this.db.collection('alldemo').add({
      name:value.name,
      surname:value.surname,
      email:value.email,
      company:value.company,
      website:value.website,
      employess:value.employess,
      industry:value.industry,
      country:value.country,
      phone:value.phone,
      title:value.title,
      companyRevenue:value.companyRevenue
    });
  }
}
