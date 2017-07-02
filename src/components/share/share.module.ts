import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ShareComponent } from './share';
import { HeaderComponentModule } from './header/header.module'

@NgModule({
  declarations: [
    ShareComponent,
  ],
  imports: [
    HeaderComponentModule,
    IonicModule,
  ],
  exports: [
    ShareComponent
  ]
})
export class ShareComponentModule {}
