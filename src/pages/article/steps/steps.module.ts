import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { StepsComponent } from './steps';


@NgModule({
  declarations: [
    StepsComponent,
  ],
  imports: [
    IonicModule
  ],
  exports: [
    StepsComponent
  ]
})
export class StepsComponentModule {}
