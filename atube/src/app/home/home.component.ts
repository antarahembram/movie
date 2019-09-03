import { Component, OnInit,Output ,EventEmitter} from '@angular/core';
import { YoutubeService } from '../youtube.service';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { Router } from '@angular/router';
@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
} 

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
  constructor(private _youtubeservice:YoutubeService, private router:Router) { }
  public cap_video;
  ngOnInit() {
      this._youtubeservice.getVideos()
        .subscribe((res)=>{console.log(res);
         // this.cap_video=res.items[0];
          //console.log(this.cap_video);
          this.videos=res.items;
          this.search_tab=false;
          this.trending_tab=true;
          });
          
  }
  addto(value1,value2)
  {
    console.log(value1);
    console.log(value2);

    let value3=window.prompt("Item has been added to the Playlist \n Add some comments here");
    this._youtubeservice.add_fav(value1,value2,value3);
   // this.router.navigate(['playlist']);
    
    //window.location.reload();
  }
 

 


}
