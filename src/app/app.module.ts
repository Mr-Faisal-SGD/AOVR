import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgIconsModule } from '@ng-icons/core';
import { featherArrowDownRight } from '@ng-icons/feather-icons';
import { lucideArrowDownRight, lucideArrowUpRight } from '@ng-icons/lucide';

import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { WrapperComponent } from './partials/wrapper/wrapper.component';
import { StakeComponent } from './components/stake/stake.component';

@NgModule({
  declarations: [AppComponent, HeroComponent, WrapperComponent, StakeComponent],
  imports: [
    BrowserModule,
    NgIconsModule.withIcons({
      featherArrowDownRight,
      lucideArrowDownRight,
      lucideArrowUpRight,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
