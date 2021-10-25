import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor() { }

  workTime:number = 25
  breakTime:number = 25

  newTimeWork(newTime:number){  
    this.workTime = newTime
  }
  newTimeBreak(newTime:number){
    this.breakTime = newTime
  }

  ngOnInit(): void {
  }

}
