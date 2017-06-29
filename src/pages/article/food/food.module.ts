import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { FoodComponent } from './food';

@NgModule({
  declarations: [
    FoodComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    FoodComponent
  ]
})
export class FoodComponentModule {}
