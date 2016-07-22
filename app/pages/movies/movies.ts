import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Movies} from "../../providers/movies/movies";
import {MovieDetailPage} from "../movie-detail/movie-detail";
import {MovieType} from "../../interfaces/movie-type";



@Component({
  templateUrl: 'build/pages/movies/movies.html',
  providers: [Movies]
})
export class MoviesPage {




  data: any;
  constructor(private nav: NavController, private moviesProvider: Movies) {
    this.data = this.moviesProvider.data;

  }

  showDetail(movie: MovieType){
    this.nav.push(MovieDetailPage, {"movie": movie});

  }

  deleteMovie(movie: MovieType){
    this.moviesProvider.deleteMovie(movie);

  }

}
