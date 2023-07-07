import { Component, OnInit } from '@angular/core';
import { MovieService } from './movie.service';
import { movieListDto } from 'src/core/model/movie-list-dto';

@Component({
  selector: 'mb-list',
  templateUrl: './movie-list.component.html'
})
export class MovieListComponent implements OnInit {
  title = 'movies-browser';
  movieList: movieListDto[];
  movieType: string = '';

  constructor(private movieService: MovieService) {}

  getMovies(type: string) { debugger;
    return this.movieService.getList(type).subscribe(
      (data: any)=>{
      this.movieList = data
      },
      (error: any) => this.catchErrorResponse(error)
    )
  }
  private catchErrorResponse(error: any) {
    console.log(error.data);
  }

  ngOnInit(): void {
    this.getMovies('popular');
  }
}
