import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { StepsComponent } from './steps';
import { PhotoswipeComponentModule } from '../../../components/photoswipe/photoswipe.module';

@NgModule({
  declarations: [
    StepsComponent,
  ],
  imports: [
    IonicModule,
    PhotoswipeComponentModule
  ],
  exports: [
    StepsComponent
  ]
})
export class StepsComponentModule {}
