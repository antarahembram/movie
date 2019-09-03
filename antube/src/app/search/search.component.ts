import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../youtube.service';
import { ActivatedRoute } from '@angular/router';
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
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public videos=[];
 // public url1='https://www.youtube.com/embed/';
  constructor(private _youtubeservice: YoutubeService,private activatedroute:ActivatedRoute) { }
  public searchKey;
  ngOnInit() {
    
    let id=this.activatedroute.snapshot.paramMap.get('id');
    this.searchKey=id;
    this._youtubeservice.get_search_videos(this.searchKey)
      .subscribe((res)=>{console.log(res);
      this.videos=res.items;

      });
  }

  addto(value1,value2)
  {
    
    let value3=window.prompt("Item has been added to the Playlist  \n Add some comments here");
    this._youtubeservice.add_fav(value1,value2,value3);
  }
  
}
