import { Component } from '@angular/core';
import {NgxSpinnerService} from 'ngx-spinner';
import { YoutubeService } from './youtube.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'youtube';
  public message="";
  
  
}
