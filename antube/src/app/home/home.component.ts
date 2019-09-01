import { Component, OnInit,Output ,EventEmitter} from '@angular/core';
import { YoutubeService } from '../youtube.service';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public search_tab=false;
  public trending_tab=true;
  public videos:[];
  public v_url: string='https://www.youtube.com/embed/';
  constructor(private _youtubeservice:YoutubeService) { }
  public cap_video;
  ngOnInit() {
      this._youtubeservice.getVideos()
        .subscribe((res)=>{console.log(res);
          this.cap_video=res.items[0];
          console.log(this.cap_video);
          this.videos=res.items.slice(1);
          this.search_tab=false;
          this.trending_tab=true;
          });

          
          
  }

 


}
