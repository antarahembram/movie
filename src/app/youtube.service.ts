import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable} from 'rxjs';
import {Ik} from './tube';
@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

 // public url: string="/assets/search.json";
  apiKey : string = 'AIzaSyBwnAeboLaBx5drI4wRmMNEkxPif7u0QPk';
  private url: string = 'https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&regionCode=US&key=' + this.apiKey ;
  
 
  constructor(private http: HttpClient) { }

    getVideos():Observable<any> {
    console.log(this.url);
     return this.http.get<any>(this.url);
  }

  get_search_videos(value):Observable<any>
  {
    let url1='https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=';
    let url2='&key=';
    let search_url=url1+value+url2+this.apiKey;
    console.log(search_url);
    return this.http.get<any>(search_url);
  }


  getdata(value):Observable<any>
  {
    let url_des1='https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=';
    let url_des2='&key=';
    let des_url=url_des1+value+url_des2+this.apiKey;
    console.log(des_url);
    return this.http.get<any>(des_url);
  }

}
