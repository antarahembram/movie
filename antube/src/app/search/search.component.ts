import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../youtube.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public videos=[];
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

  
}
