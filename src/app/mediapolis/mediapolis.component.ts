import { Component, OnInit } from '@angular/core';
import { MediapolisService } from '../services/mediapolis.service';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mediapolis',
  templateUrl: './mediapolis.component.html',
  styleUrls: ['./mediapolis.component.scss']
})
export class MediapolisComponent implements OnInit {

  movies: any;
  genres: any;
  form:FormGroup;

  constructor(private service: MediapolisService, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      title:""
    })
    this.service.getTmdb().subscribe((data) => { this.movies = data['results']; })
    this.service.getGenre().subscribe(data => { this.genres = data['genres'];  });
  }

  getByGenre(id) {
    this.service.movieByGenre(id).subscribe(data => { this.movies = data.results })
  }

  onSubmit(){
    this.service.movie(this.form.value['title']).subscribe(data=>{this.movies=data['results'];console.log(this.movies)});

  }

}
