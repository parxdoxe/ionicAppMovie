import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  films: any = []
  filmDetail: any = []

  constructor(private http: HttpClient) {}

  ionViewWillEnter(){
    this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=40009de0f135cfd09989d99f18892b45').subscribe( response => {
    this.films = response['results']
    console.log(this.films);
    })
  }

  


}
