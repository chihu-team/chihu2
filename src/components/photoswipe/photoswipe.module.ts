import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { PhotoswipeComponent } from './photoswipe';

@NgModule({
  declarations: [
    PhotoswipeComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    PhotoswipeComponent
  ]
})
export class PhotoswipeComponentModule {}
