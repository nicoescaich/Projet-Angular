import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MediapolisService } from '../services/mediapolis.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movie:any;

  constructor(private route:ActivatedRoute,private service:MediapolisService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params;
    console.log(id)
    this.service.movieById(id['id']).subscribe(data=>this.movie=data);
  }

}
