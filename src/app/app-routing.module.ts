import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Component1Component } from './component1/component1.component';
import { VideoShowComponent } from './video-show/video-show.component';


const routes: Routes = [
  {path: '',redirectTo:'/front',pathMatch:'full'},
  {path:'front', component: Component1Component},
  {path: 'video/:id', component: VideoShowComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
