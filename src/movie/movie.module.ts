import { NgModule } from "@angular/core";
import { MovieListComponent } from "./movie-list.component";
import { MovieService } from "./movie.service";


@NgModule({
  declarations: [
    MovieListComponent,
  ],
  imports: [

  ],
  providers: [ MovieService ]
})
export class MovieModule { }
