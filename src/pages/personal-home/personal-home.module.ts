import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonalHomePage } from './personal-home';
import { WorkComponentModule } from '../../components/work/work.module';

@NgModule({
  declarations: [
    PersonalHomePage,
  ],
  imports: [
    WorkComponentModule,
    IonicPageModule.forChild(PersonalHomePage),
  ],
  exports: [
    PersonalHomePage
  ]
})
export class PersonalHomePageModule {}
