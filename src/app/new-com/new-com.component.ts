import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
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
  selector: 'app-new-com',
  templateUrl: './new-com.component.html',
  styleUrls: ['./new-com.component.css']
})

export class NewComComponent implements OnInit {

  constructor(private activateroute:ActivatedRoute) { }
  public videoId;
  public url1='https://www.youtube.com/embed/';
  ngOnInit() {
    let id=this.activateroute.snapshot.paramMap.get('id');
  
    let url=this.url1+id;
    this.videoId=url;
  //  console.log(this.videoId);
  }
  @Output() public childEvent=new EventEmitter;
  s(value)
  {
      this.childEvent.emit(value);
    
    }
  
  
  
}
