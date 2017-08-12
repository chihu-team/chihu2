import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { MesItemComponent } from './mes-item';

@NgModule({
  declarations: [
    MesItemComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    MesItemComponent
  ]
})
export class MesItemComponentModule {}
