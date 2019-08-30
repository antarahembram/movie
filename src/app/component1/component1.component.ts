import { Component, OnInit,Output ,EventEmitter} from '@angular/core';
import { YoutubeService } from '../youtube.service';
import {Ik} from '../tube';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

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
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  public search_tab=false;
  public trending_tab=true;
  public videos:Ik[];
  public v_url: string='https://www.youtube.com/embed/';
  constructor(private _youtubeservice:YoutubeService) { }

  ngOnInit() {
      this._youtubeservice.getVideos()
        .subscribe((res)=>{console.log(res);
          this.videos=res.items;
          this.search_tab=false;
          this.trending_tab=true;
          });

          
          
  }

    public searchkey;
  s(value)
  {
    this.searchkey=value;
    
    this._youtubeservice.get_search_videos(value)
      .subscribe((res)=>{console.log(res);
        this.videos=res.items;});
        this.search_tab=true;
        this.trending_tab=false;
  }


}
