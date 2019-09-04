import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { YoutubeService } from '../youtube.service';
import { TouchSequence } from 'selenium-webdriver';
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
  channelID="";
  like="";
  dislike="";
  publish="";
  view="";
  public d="";
  chn="";l="";dl="";vw="";pb="";
  //To display the description of the video
  showdes()
  {
      this._youtubeservice.getdata(this.v_id)
        .subscribe((res)=>{console.log(res);
          this.data_s=res;
          console.log(this.data_s);
          this.my_desc=this.data_s.items[0].snippet.description;
          this.channelID=this.data_s.items[0].snippet.channelTitle;
          this.publish=this.data_s.items[0].snippet.publishedAt;
          this.view=this.data_s.items[0].statistics.viewCount;
          this.like=this.data_s.items[0].statistics.likeCount;

          this.dislike=this.data_s.items[0].statistics.dislikeCount;


          // this.rmpl.splice(this.rmpl.indexOf(i),1);
        });
        this.d="description";
        this.chn="channel id";
        this.vw="views";
        this.l="like";
        this.dl="dislike";
        this.pb="published at";
  
      
  }
  //function to add video in the playlist
  public playlist;
  addto(value1,value2)
  {
   // let value3=window.prompt("Item has been added to the Playlist  \n Add some comments here");
    this._youtubeservice.add_fav(value1,value2);
    

  }


}
