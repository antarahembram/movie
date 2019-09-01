import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { YoutubeService } from '../youtube.service';
@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
} 

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  constructor(private activateroute:ActivatedRoute, private _youtubeservice:YoutubeService) { }
  public videoId;
  public v_id;
  public videos;
  public title;
  public data_s; //for storing data using video id
  public url1='https://www.youtube.com/embed/';
  ngOnInit() {
    let id=this.activateroute.snapshot.paramMap.get('id');
    let my_id=id.substring(0,11);
    this.v_id=my_id;
    let desc=id.substring(11);
   // console.log("this" +my_id);
   this.title=desc;
    let url=this.url1+my_id;
    this.videoId=url;
  //  console.log(this.videoId);


    this._youtubeservice.getVideos()
    .subscribe((res)=>{console.log(res);
      this.videos=res.items;
      });

  }
  public my_desc="";
  public d="";
  showdes()
  {
      this._youtubeservice.getdata(this.v_id)
        .subscribe((res)=>{console.log(res);
          this.data_s=res;
          console.log(this.data_s);
          this.my_desc=this.data_s.items[0].snippet.description;
        });
        this.d="description";
  
      
  }
  addto(value)
  {
    console.log(this.v_id);
    this._youtubeservice.add_fav(this.v_id);
  }


}
