import { Component, OnInit } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
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

  constructor(private _youtubeservice:YoutubeService) { }
  public fav;
  public videos;
  public url1='https://www.youtube.com/embed/';
  ngOnInit() {
    this._youtubeservice.get_fav()
      .subscribe((res)=>{console.log(res);
      this.fav=res;
      });
    
      

  }

}
