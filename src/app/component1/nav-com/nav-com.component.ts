import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-nav-com',
  templateUrl: './nav-com.component.html',
  styleUrls: ['./nav-com.component.css']
})
export class NavComComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Output() child=new EventEmitter;
  s(value)
  {
    this.child.emit(value);
  }

}
