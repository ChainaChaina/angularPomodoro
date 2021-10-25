import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-picker',
  templateUrl: './picker.component.html',
  styleUrls: ['./picker.component.scss']
})
export class PickerComponent implements OnInit {

  constructor() { }

  @Output() newTime = new EventEmitter<number>();

  segs:number = 0
  timeArray:any = [{
    time: 0, id: 0
  },
  {
    time: 0, id: 1
  },
  {
    time: 2, id: 2
  },
  {
    time: 5, id: 3
  },]

  ticTac(valor:any,id:number){
    if(valor == 'up' && this.timeArray[id].time < 9 ){
      this.timeArray[id].time ++
    }
    if(valor == 'down'  && this.timeArray[id].time > 0){
      this.timeArray[id].time --
    }
    this.calcSeg()
  }

  calcSeg(){
    this.segs =(this.timeArray[0].time * 600 +
    this.timeArray[1].time * 60 +
    this.timeArray[2].time * 10 +
    this.timeArray[3].time)
    this.newTime.emit(this.segs);
  }

  ngOnInit(): void {
    this.calcSeg()
  }

}
