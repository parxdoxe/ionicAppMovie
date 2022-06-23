import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-film',
  templateUrl: './detail-film.page.html',
  styleUrls: ['./detail-film.page.scss'],
})
export class DetailFilmPage implements OnInit {

  film: any = {};
  acteurs: any = [];
  genre: any = [];

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.film = this.router.getCurrentNavigation().extras.state;
  }

  ionViewWillEnter(){
  this.getActor(this.film.id)
  this.getGenre(this.film.id)
  }

  getActor (id){
    this.http.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=40009de0f135cfd09989d99f18892b45`).subscribe( response => {
    this.acteurs = response['cast']
    console.log(this.acteurs);
  })
  }

  getGenre(id){
    this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=40009de0f135cfd09989d99f18892b45`).subscribe(response => {
      this.genre = response['genres']
      console.log(this.genre);
      
    })
  }
  
  
  

  

 
  
    
   

}
