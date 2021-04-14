import { Component, OnInit } from '@angular/core';
import { PersonneService } from '../services/personne.service'
import { Personnes } from '../interfaces/personne';

@Component({
  selector: 'app-mentions-legales',
  templateUrl: './mentions-legales.component.html',
  styleUrls: ['./mentions-legales.component.scss']
})
export class MentionsLegalesComponent implements OnInit {
  errors: any;
  personnes: Personnes;

  constructor(private personneService: PersonneService) { }

  ngOnInit(): void {

    this.personneService.getPersonnes().subscribe(
      (data: any) => {
        if (data.errors) {
          this.errors = data;
        } else {
          this.personnes = data;
        }
      },
      (error: any) => {
        console.log('Erreur' + error);
      }
    );

  }

}
