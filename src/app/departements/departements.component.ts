import { Component, OnInit } from '@angular/core';
import { Departements } from '../interfaces/departement';
import { DepartementsService } from '../services/departements.service'

@Component({
  selector: 'app-departements',
  templateUrl: './departements.component.html',
  styleUrls: ['./departements.component.scss']
})
export class DepartementsComponent implements OnInit {

  errors: any;
  departements: Departements;

  constructor(private departementsService: DepartementsService) { }

  ngOnInit(): void {

    this.departementsService.getDepartements().subscribe(
      (data: any) => {
        if (data.errors) {
          this.errors = data;
        } else {
          this.departements = data;
        }
      },
      (error: any) => {
        console.log('Erreur' + error);
      }
    );

  }

}
