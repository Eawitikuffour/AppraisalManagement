import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deadline-component',
  templateUrl: './deadline-component.component.html',
  styleUrls: ['./deadline-component.component.css']
})
export class DeadlineComponentComponent implements OnInit {

  today = new Date();
  // endtime = new Date()
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    
  }

}
