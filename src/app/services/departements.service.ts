import { Injectable } from '@angular/core';
import { Departements } from '../interfaces/departement';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartementsService implements Departements {

  id: string;
  nom: string;

  protected url = 'assets/data/departements.json';
  
  constructor(private http:HttpClient) {}

  getDepartements():Observable<any>{
   return this.http.get(this.url);
  }

}
