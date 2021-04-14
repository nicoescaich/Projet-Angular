import { Component, OnInit, Input } from '@angular/core';
import { SportService } from '../services/sport.service';
import { AnonymousSubject } from 'rxjs/internal/Subject';



@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {

  codePays : string //code Pays
  matchData  : any  //json des donnees des matchs
  match : number //id du match
  flagData: any; //json des drapeaux
  goal: string ="goal";
  goalPenalty: string = "goal-penalty";
  // goalOwn: string = "goal-own";
  
  constructor(private service : SportService) { 
    this.match=this.service.getMatchId() //recupere id match
    this.codePays=this.service.getcodePays() //recupere le code du pays

    
  }

  ngOnInit() : void{
    this.service.getMatch(this.codePays).subscribe( data => { this.matchData = data; 
      console.log(this.matchData)}) //recupere json dans matchData
    this.service.getFlag().subscribe ( data => { this.flagData = data;console.log(this.flagData) //recupere json des drapeaux dans flagData
    })

  }

  
}

      
   
    
  
  
