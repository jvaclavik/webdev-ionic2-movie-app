import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {MovieType} from "../../interfaces/movie-type";

@Injectable()
export class Movies {
  data: any;

  constructor(private http: Http) {

    this.data = {movies: []};
    this.load();
  }

  load() {

    var url = "http://api.themoviedb.org/3/movie/popular?api_key=4aa883f95999ec813b8bfaf319f3972b";

    //noinspection TypeScriptUnresolvedVariable
    this.http.get(url)
      .map(res => res.json())
      .map(res => res.results)
      .subscribe(data => {
        this.data.movies = data;
      });
  }

  deleteMovie(movieToDelete:MovieType) {

    this.data.movies.forEach((movie, index) => {
      if(movie.id == movieToDelete.id){
        this.data.movies.splice(index, 1);
      }
    })

    //for(let [index, movie] of this.data.movies){
    //  if(movie.id == movieToDelete.id){
    //    this.data.movies.splice(index, 1);
    //  }
    //}

  }
}

