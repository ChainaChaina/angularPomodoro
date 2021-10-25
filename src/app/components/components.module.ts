import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerComponent } from './timer/timer.component';
import { PickerComponent } from './picker/picker.component';



@NgModule({
  declarations: [
    TimerComponent,
    PickerComponent,
  ],
  imports: [
    CommonModule
  ],exports:[
    TimerComponent,
    PickerComponent
  ]
})
export class ComponentsModule { }
