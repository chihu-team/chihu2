import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { WorkComponentModule } from '../../components/work/work.module';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    WorkComponentModule,
    IonicPageModule.forChild(HomePage)
  ],
  exports: [
    HomePage
  ]
})
export class HomePageModule {}
