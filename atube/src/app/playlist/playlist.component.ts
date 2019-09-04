import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { YoutubeService } from '../youtube.service';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
} 

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  constructor(private _youtubeservice:YoutubeService,private http:HttpClient) { }
  public fav;
  public videos;
  public url1='https://www.youtube.com/embed/';
  public com='comments: ';
  public com_done=true;
  ngOnInit() {
    this._youtubeservice.get_fav()
      .subscribe((res)=>{console.log(res);
      this.fav=res;
        console.log(window.location);
      });
    
      

  }

  public json_url:string='http://localhost:3000/playlist';

  remove(value)
  {
    
    this._youtubeservice.remove_fav(value).subscribe();
    window.location.reload();

  }

  editcom(value1,value2,value3)
  {
    let value4=window.prompt("Write here");
    this._youtubeservice.edit(value1,value2,value3,value4);
     //this.com_done=false;

 //   window.location.reload();

  }

}
