import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YoutubeService } from './youtube.service';
import { Component1Component, SafePipe } from './component1/component1.component';
import { VideoShowComponent } from './video-show/video-show.component';
import { NewComComponent } from './new-com/new-com.component';
import { NavComComponent } from './component1/nav-com/nav-com.component';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    SafePipe,
    VideoShowComponent,
    NewComComponent,
    NavComComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    ],
  providers: [YoutubeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
