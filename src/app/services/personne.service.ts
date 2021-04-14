import { Injectable } from '@angular/core';
import { Personnes } from '../interfaces/personne';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PersonneService implements Personnes {

  prenom: string;
  imageUrl: string;
  description: string;
  formation: string;
  
  protected url = 'assets/data/mentions.json';
  
  constructor(private http:HttpClient) {}

  getPersonnes():Observable<any>{
   return this.http.get(this.url);
  }
}
