import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArticlePage } from './article';
import { HeaderComponentModule } from './header/header.module';
import { FoodComponentModule } from './food/food.module';
import { StepsComponentModule } from './steps/steps.module';
import { FooterComponentModule } from './footer/footer.module';

@NgModule({
  declarations: [
    ArticlePage,
  ],
  imports: [
    HeaderComponentModule,
    FoodComponentModule,
    StepsComponentModule,
    FooterComponentModule,
    IonicPageModule.forChild(ArticlePage),
  ],
  exports: [
    ArticlePage
  ]
})
export class ArticlePageModule {}
