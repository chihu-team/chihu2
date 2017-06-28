import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FoundPage } from './found';
import { SwiperComponentModule } from '../../components/swiper/swiper.module';
import { ShareComponentModule } from '../../components/share/share.module';

@NgModule({
  declarations: [
    FoundPage,
  ],
  imports: [
    SwiperComponentModule,
    ShareComponentModule,
    IonicPageModule.forChild(FoundPage),
  ],
  exports: [
    FoundPage
  ]
})
export class FoundPageModule {}
