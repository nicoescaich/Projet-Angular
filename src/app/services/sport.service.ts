import { Injectable } from '@angular/core';
import {HttpClient, HttpClientJsonpModule} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SportService {

baseUrlTeams = 'https://worldcup.sfg.io/teams/';
baseUrl = 'https://worldcup.sfg.io/matches/country?fifa_code=';

private codePays: string;
private matchId: number;


  constructor(private http: HttpClient) {

    this.http.get(this.baseUrl); 
    this.http.get(this.baseUrlTeams); 
    this.http.get("./assets/fff.json")
   }

   public getCountry():Observable<any>{

    
    return this.http.get(this.baseUrlTeams); //home_team_statistics[starting_eleven[{substitutes[]}]] effectif complet
   
   }

   /**
    * 
    * @param country 
    * return observable de l api json, concatenation de baseUrl + code pays
    */
   public getMatch(country : string) : Observable<any>{
    this.setcodePays(country);//set du code pays
    return this.http.get(this.baseUrl+this.getcodePays());
   }
   /**
    * acces au json des drapeaux
    */
   public getFlag() : Observable<any>{
     
     return  this.http.get("./assets/data/fff.json")
   }

   /**
    * 
    * @param code setter code pays
    */
   public setcodePays(code : string){
    this.codePays = code;
   }
/**
 * getter code pays
 */
   public getcodePays(): string{
     return this.codePays;
   }

   /**
    * getter id du match fifa_code
    */
   public getMatchId() : number{
     return this.matchId;
   }

   /**
    * 
    * @param id setter id du match fifa_code
    */
   public setMatchId(id : number){
     this.matchId=id;
   }
}
