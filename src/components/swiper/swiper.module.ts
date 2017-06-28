import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { SwiperComponent } from './swiper';

@NgModule({
  declarations: [
    SwiperComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    SwiperComponent
  ]
})
export class SwiperComponentModule {}
