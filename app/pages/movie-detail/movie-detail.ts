import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {MovieType} from "../../interfaces/movie-type";

@Component({
  templateUrl: 'build/pages/movie-detail/movie-detail.html',
})

export class MovieDetailPage {
  movie: MovieType;

  constructor(private nav:NavController, private navParams:NavParams) {

  }

  ngOnInit() {
    this.movie = this.navParams.get("movie");

  }


}
