import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { MapService} from '../services/map-service.service'
import { ActivatedRoute } from '@angular/router';
import { Departements } from '../interfaces/departement';
import { DepartementsService } from '../services/departements.service'
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  errors: any;
  departement= '';
  myMap: any;
  myIcon: any;
  lat= 43.6043;
  long= 1.4437;
  zoom= 9;
  departements: Departements;
  registerForm: FormGroup;
  dep: FormControl;

  constructor(private service: MapService, private route: ActivatedRoute, private departementsService: DepartementsService, private formBuilder: FormBuilder) { }

  ngOnInit()  {

    this.registerForm=this.formBuilder.group({
      dep: [""]
    });

    this.getDepartements();

    this.myMap = L.map('map').setView([this.lat, this.long], this.zoom);
      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'Radar Map'
    }).addTo(this.myMap);

    this.myIcon = L.icon({
      iconUrl: 'assets/img/radar.png'
    });

    this.getRadars(this.myMap, this.myIcon);
    
}

onSubmit(formValue){

  if(formValue.dep==='11'){
    this.departement = '11+-+Aude';
    this.lat=43.2167;
    this.long=2.35;
  }
  if(formValue.dep==='32'){
    this.departement = '32+-+Gers';
    this.lat=43.65;
    this.long=0.5833;
  }
  if(formValue.dep==='09'){
    this.departement = '09+-+Ariège';
    this.lat=42.9667;
    this.long=1.6;
  }
  if(formValue.dep==='31'){
    this.departement = '31+-+Haute-Garonne';
    this.lat=43.6043;
    this.long=1.4437;
  }
  if(formValue.dep==='30'){
    this.departement = '30+-+Gard';
    this.lat=43.8333;
    this.long=4.35;
  }
  if(formValue.dep==='34'){
    this.departement = '34+-+Hérault';
    this.lat=43.6;
    this.long=3.8833;
  }
  if(formValue.dep==='66'){
    this.departement = '66+-+Pyrénées-Orientales';
    this.lat=42.6976;
    this.long=2.8954;
  }
  if(formValue.dep==='48'){
    this.departement = '48+-+Lozère';
    this.lat=44.5167;
    this.long=3.5;
  }
  if(formValue.dep==='81'){
    this.departement = '81+-+Tarn';
    this.lat=43.6;
    this.long=2.25;
  }
  if(formValue.dep==='82'){
    this.departement = '82+-+Tarn-et-Garonne';
    this.lat=44.0167;
    this.long=1.35;
  }
  if(formValue.dep==='65'){
    this.departement = '65+-+Hautes-Pyrénées';
    this.lat=43.2333;
    this.long=0.0833;
  }
  if(formValue.dep==='12'){
    this.departement = '12+-+Aveyron';
    this.lat=44.3542;
    this.long=2.5777;
  }
  if(formValue.dep==='46'){
    this.departement = '46+-+Lot';
    this.lat=44.4491;
    this.long=1.4366;
  }

  if (this.myMap != undefined) { this.myMap.remove(); }

  this.myMap = L.map('map').setView([this.lat, this.long], this.zoom);
      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'Radar Map'
    }).addTo(this.myMap);

  return this.getRadarsByDep(this.departement, this.myMap, this.myIcon);

 }

getRadars(myMap: any, myIcon: any){
  this.service.getDatas().subscribe(
    (data: any) => {
      if (data.errors) {
        this.errors = data;
      } else {
    data.records.forEach(radars => {
      L.marker([radars.geometry.coordinates[1], radars.geometry.coordinates[0]], {icon: myIcon}).addTo(myMap)
      .bindPopup(
             '<b>Nom</b> : ' + (radars.fields.name != undefined? radars.fields.name: "-")
              +'<br> ' +
              '<b>Route</b> : ' +(radars.fields.radarroad != undefined? radars.fields.radarroad: "-")
              +' <br>' +
             '<b>Type</b> : '+( radars.fields.rulesmesured_name != undefined? radars.fields.rulesmesured_name: "-")
              +'<br> ' +
              '<b>Ville</b> :' +(radars.fields.radarplace != undefined? radars.fields.radarplace.toUpperCase()    : "-")
              +'<br> ' +
              '<b>Département</b> : ' +(radars.fields.department!= undefined? radars.fields.department: "-" ));;
                                    });
            }
    },
    (error: any) => {
      console.log('Erreur' + error);
    }
  );

}

getRadarsByDep(departement: string = '', myMap: any, myIcon: any) {
  if (departement != this.service.getDepartement() || this.departement == '') {
    this.service.setDepartement(
      departement != '' ? departement : this.service.getDepartement()
    );
    this.service.getRadarsByDep().subscribe(
      (data: any) => {
        if (data.errors) {
          this.errors = data;
          console.log(this.errors);
        } else {
          data.records.forEach(radars => {
            L.marker([radars.geometry.coordinates[1], radars.geometry.coordinates[0]], {icon: myIcon}).addTo(myMap)
            .bindPopup(
                   '<b>Nom</b> : ' + (radars.fields.name != undefined? radars.fields.name: "-")
                    +'<br> ' +
                    '<b>Route</b> : ' +(radars.fields.radarroad != undefined? radars.fields.radarroad: "-")
                    +' <br>' +
                   '<b>Type</b> : '+( radars.fields.rulesmesured_name != undefined? radars.fields.rulesmesured_name: "-")
                    +'<br> ' +
                    '<b>Ville</b> :' +(radars.fields.radarplace != undefined? radars.fields.radarplace.toUpperCase()    : "-")
                    +'<br> ' +
                    '<b>Département</b> : ' +(radars.fields.department!= undefined? radars.fields.department: "-" ));;
                                          });
        }
      },
      (error: any) => {
        console.log('Erreur' + error);
      }
    );
  }
}

getDepartements(){
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
