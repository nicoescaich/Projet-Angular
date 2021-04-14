import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  protected url = 'https://data.laregion.fr/api/records/1.0/search/?dataset=radars-en-occitanie&q=&rows=1000';
  protected facet = '&facet=department&refine.department=';
  private departement: string;

  constructor(private http: HttpClient) {}

  getDatas() : Observable<any> {
    return this.http.get(`${this.url}`);
  }

  getRadarsByDep() : Observable<any> {
    return this.http.get(`${this.url}${this.facet}${this.departement}`);
  }

  public setDepartement(departement: string){
    this.departement = departement;
  }

  public getDepartement(){
    return this.departement;
  }

  //format dep = 34+-+H%C3%A9rault
  }