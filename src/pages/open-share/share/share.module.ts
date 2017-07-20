import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ShareComponent } from './share';
import { HeaderComponentModule } from './header/header.module';
import { PhotoswipeComponentModule } from '../../../components/photoswipe/photoswipe.module';

@NgModule({
  declarations: [
    ShareComponent,
  ],
  imports: [
    HeaderComponentModule,
    IonicModule,
    PhotoswipeComponentModule
  ],
  exports: [
    ShareComponent
  ]
})
export class ShareComponentModule {}
