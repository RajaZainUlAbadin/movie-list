import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MovieModule } from 'src/movie/movie.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    MovieModule,
    BrowserModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
