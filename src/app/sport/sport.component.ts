import { Interfaces } from './../interfaces/interfaces.sport';
import { Component, OnInit } from '@angular/core';
import { SportService } from '../services/sport.service';


import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { SelectorMatcher } from '@angular/compiler';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.scss']
})
export class SportComponent implements Interfaces, OnInit {
  registerForm: FormGroup;
  country: FormControl;
  countryData :any ; //json de la liste des pays
  teamData : any; //json des donnees des match
  match : number;
  codePays : string = '';
  


  constructor(private service: SportService , private fb: FormBuilder) { }
  
  /**
   * build Formulaire objet Formgroup avec les FormControl
   * return Json dans countryData
   */
  ngOnInit() : void {
    this.registerForm=this.fb.group({
      country: [""]
    })
    this.service.getCountry().subscribe(data => {  this.countryData = data;})
    
  } 

  /**
   * 
   * @param formValue valeur du  submit formulaire
   * return json dans teamData
   */
  public onSubmit(formValue : any) : any{

  this.codePays = formValue.country;
  return this.service.getMatch(formValue.country).subscribe( data => { this.teamData = data; 
        console.log(this.teamData);})
  }


/**
 * setter attribut match
 * @param match 
 */
  public setMatch(match: number)  {
    this.match=match
    this.service.setMatchId(this.match) //set du match dans le service
  
  }
  
  /**
   * getter attribut match
   */
  public getMatch() : number{
    return this.match
  }
}
