import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import {Playlist} from './playlist'; 
import { $ } from 'protractor';
@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  apiKey : string = 'AIzaSyBwnAeboLaBx5drI4wRmMNEkxPif7u0QPk';
  private url: string = 'https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=23&regionCode=US&key=' + this.apiKey ;
  constructor(private http: HttpClient) { }

    getVideos():Observable<any> {
    console.log(this.url);
     return this.http.get<any>(this.url);
  }

  getdata(value):Observable<any>
  {
    let url_des1='https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=';
    let url_des2='&key=';
    let des_url=url_des1+value+url_des2+this.apiKey;
    console.log(des_url);
    return this.http.get<any>(des_url);
  }

  get_search_videos(value):Observable<any>
  {
    let url1='https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=';
    let url2='&key=';
    let search_url=url1+value+url2+this.apiKey;
    console.log(search_url);
    return this.http.get<any>(search_url);
  }

  public json_url:string='http://localhost:3000/playlist';
  public data= {
    videoId:'',
    title:'',
    comments:'',
  };
  add_fav(value1,value2,value3)
  {
    //console.log(this.data);
    this.data.videoId=value1;
    this.data.title=value2;
    this.data.comments=value3;

    //console.log(this.data);
    this.http.post(this.json_url,this.data).toPromise();
  }

  get_fav():Observable<any>
  {
    return this.http.get<any>(this.json_url);
  }

  public rmpl;
  public remove_id;


  remove_fav(value)
  {
    return this.http.delete(`${this.json_url}/${value}`);
  //  this.http.delete(`${this.json_url}/${this.a}`);
  }
  edit(value1,value2,value3,value4)
  {
    this.data.videoId=value2;
    this.data.title=value3;
    this.data.comments=value4;
    console.log(value1);
    console.log(value2);
    console.log(value3);
    console.log(value4);
    return this.http.put(`${this.json_url}/${value1}`,this.data).toPromise();

  }
}
