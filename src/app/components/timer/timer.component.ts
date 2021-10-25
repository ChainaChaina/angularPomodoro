import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';



@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  ngOnInit() {
    this.timeWork = this.workTimeFromParents;
    this.timeBreak = this.breakTimeFromParents;
  }

  constructor() { }
  @Input()
  workTimeFromParents: number = 25
  @Input()
  breakTimeFromParents: number = 19

  clock:any = '00:00'
  workTimeIsOn: boolean = true
  pause: boolean = true;
  timeWork: number = 0
  timeBreak: number = 0
  pomodoros: number = 0
  intervalWork: any
  intervalBreak: any
  timeStoped: number = -1
  totalTime:number = -1
  fillHeight:number = 0

  workTime() {
    this.timeWork = this.workTimeFromParents
    this.totalTime == -1? this.totalTime = this.workTimeFromParents: this.totalTime = this.totalTime
    this.pause = false;
    if (this.timeStoped != -1) {
      this.timeWork = this.timeStoped
    }
    if(this.totalTime != -1){

    }
    this.intervalWork = setInterval(() => {
      this.calc(this.timeWork)
      this.showClock(this.timeWork)
      if (this.timeWork > 0) {
        this.timeWork--;
      } else {
        this.playAlarm1()
        this.timeStoped = -1
        this.totalTime = -1
        this.killTimerWork()
        this.pomodoros++
        this.timeWork = this.workTimeFromParents;
        this.breakTime()
        this.workTimeIsOn = false
      }
    }, 1000)
  }

  breakTime() {
    this.pause = false;
    this.totalTime == -1? this.totalTime = this.breakTimeFromParents: this.totalTime = this.totalTime
    this.timeBreak = this.breakTimeFromParents
    if (this.timeStoped != -1) {
      this.timeBreak = this.timeStoped
    }
    this.intervalBreak = setInterval(() => {
      this.calc(this.timeBreak)
      this.showClock(this.timeBreak)
      if (this.timeBreak > 0) {
        this.timeBreak--;
      } else {
        this.playAlarm2()
        this.timeStoped = -1
        this.killTimerBreak()
        this.timeBreak = this.breakTimeFromParents;
        this.workTime()
        this.workTimeIsOn = true
      }
    }, 1000)
  }

  restart(turn: any) {
    if (turn == 'break') {
      this.timeBreak = this.breakTimeFromParents
      this.totalTime = -1
      this.killTimerBreak()
      this.breakTime()
    }
    if (turn == 'work') {
      this.timeWork = this.workTimeFromParents
      this.totalTime = -1
      this.killTimerWork()
      this.workTime()
    }
  }

  pauseTimerWork() {
    this.pause = true;
    clearInterval(this.intervalWork);
    this.timeStoped = this.timeWork
  }

  killTimerWork() {
    this.pause = true;
    clearInterval(this.intervalWork);
  }

  pauseTimerBreak() {
    this.pause = true;
    clearInterval(this.intervalBreak);
    this.timeStoped = this.timeBreak
  }

  killTimerBreak() {
    this.pause = true;
    clearInterval(this.intervalBreak);
  }

  calc(actualTime:number){
    this.fillHeight = (Math.abs((actualTime / this.totalTime) * 100));
  }

  playAlarm1(){
    let audio = new Audio();
    audio.src = '../../../assets/alarm-mp3.mp3'
    audio.load();
    audio.play();
  }

  playAlarm2(){
    let audio = new Audio();
    audio.src = '../../../assets/nokia.mp3'
    audio.load();
    audio.play();
  }
  

  showClock(secs:number){
    this.clock = moment.utc(secs * 1000).format('mm:ss');
  }
}
