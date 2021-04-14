import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

//interface mediapolis { }

export class MediapolisService {
  urlToulouse = "https://data.toulouse-metropole.fr/api/records/1.0/search/?dataset=top-500-des-films-les-plus-empruntes-a-la-bibliotheque-de-toulouse&q=&rows=50&sort=annee";
  urlTmdb = "https://d2nsx85y22o8i8.cloudfront.net/3/discover/movie?api_key=a8f17899a3bd6dc0019fcbfd5f0b53bd&language=fr";
  urlGenre = "https://d2nsx85y22o8i8.cloudfront.net/3/genre/movie/list?api_key=a8f17899a3bd6dc0019fcbfd5f0b53bd";
  url = "https://d2nsx85y22o8i8.cloudfront.net/3/search/movie?api_key=a8f17899a3bd6dc0019fcbfd5f0b53bd&language=fr&query=";

  constructor(private http: HttpClient) { }

  getToulouse() {
    return this.http.get(this.urlToulouse);
  }

  getTmdb() {
    return this.http.get(this.urlTmdb);
  }

  getGenre() {
    return this.http.get(this.urlGenre);
  }

  movieByGenre(genre) {
    return this.http.get<any>("https://d2nsx85y22o8i8.cloudfront.net/3/discover/movie?with_genres=" + genre + "&api_key=a8f17899a3bd6dc0019fcbfd5f0b53bd&query");
  }
  movie(titre:string){
    return this.http.get(this.url+titre);
  }
  movieById(id:Number){
    console.log(id)
    return this.http.get("https://d2nsx85y22o8i8.cloudfront.net/3/movie/"+id+"?api_key=a8f17899a3bd6dc0019fcbfd5f0b53bd&language=fr")
  }

}


