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
  click: boolean = false
  searchB: any = []

  constructor(private http: HttpClient, private storage: Storage) {}

  ionViewWillEnter(){
    this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=40009de0f135cfd09989d99f18892b45').subscribe( response => {
    this.films = response['results']
    console.log(this.films);
    })
  }

  ngOnInit() {
    
  }

  searchThis(event){
    console.log(this.search);
    this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=40009de0f135cfd09989d99f18892b45&query=${this.search}`).subscribe( response => {
      this.searchB = response['results']
      console.log(this.searchB);})
  }
  



  


}
