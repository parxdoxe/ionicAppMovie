import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  films: any = []
  filmDetail: any = []
  search: string = ''

  constructor(private http: HttpClient, private storage: Storage) {}

  ionViewWillEnter(){
    this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=40009de0f135cfd09989d99f18892b45').subscribe( response => {
    this.films = response['results']
    console.log(this.films);
    })
  }

  ngOnInit() {
    this.storage.create()
    this.storage.get('search').then(search => this.search = search)
  }
  



  


}
