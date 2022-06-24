import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.page.html',
  styleUrls: ['./actor.page.scss'],
})
export class ActorPage implements OnInit {

  actor: any = {}
  actorDetail: any = []
  filmActor: any = []

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.actor = this.router.getCurrentNavigation().extras.state;
  }

  ionViewWillEnter(){
    this.getActor(this.actor.id)
    this.getMovie(this.actor.id)
  }

  getActor(id) {
    this.http.get(`https://api.themoviedb.org/3/person/${id}?api_key=40009de0f135cfd09989d99f18892b45`).subscribe( response => {
    this.actorDetail = response
    console.log(this.actorDetail);
  })
  }

  getMovie(id) {
    this.http.get(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=40009de0f135cfd09989d99f18892b45`).subscribe( response => {
    this.filmActor = response['cast']
    console.log(this.filmActor);
  })
  }
}
