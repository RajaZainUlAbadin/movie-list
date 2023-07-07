import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private baseAddress: string = 'https://api.themoviedb.org/3/movie';
  private header: HttpHeaders = new HttpHeaders({'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmU2M2E4MWQzZjAzNDdlZGNhNTdkYTE1YWJhZGEzMCIsInN1YiI6IjY0YTdjMTAwYWYyZGE4MDEyZGEwZWIyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mvKGkAZ_bViKu6XnlgwlO-Gka1-KItwS-ZH4w5BeLpI'});

  constructor(private httpclient: HttpClient) {}

  // headers: this.header
  async getMovies(type: string) {
    var req = this.httpclient.get(`${this.baseAddress}/${type}`, {
      headers: {'Authorization': 'Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ=='}
    })
  }

}
