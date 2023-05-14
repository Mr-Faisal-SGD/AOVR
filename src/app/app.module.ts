import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgIconsModule } from '@ng-icons/core';
import { featherArrowDownRight } from '@ng-icons/feather-icons';
import { ionLogoDiscord, ionLogoInstagram, ionLogoTwitter } from '@ng-icons/ionicons';
import { lucideArrowDownRight, lucideArrowUpRight } from '@ng-icons/lucide';

import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { WrapperComponent } from './partials/wrapper/wrapper.component';
import { StakeComponent } from './components/stake/stake.component';
import { TimerComponent } from './partials/timer/timer.component';
import { StakingComponent } from './components/staking/staking.component';
import { WorkingComponent } from './components/working/working.component';
import { CardsSectionComponent } from './components/cards-section/cards-section.component';
import { CardComponent } from './partials/card/card.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [AppComponent, HeroComponent, WrapperComponent, StakeComponent, TimerComponent, StakingComponent, WorkingComponent, CardsSectionComponent, CardComponent, FooterComponent],
  imports: [
    BrowserModule,
    NgIconsModule.withIcons({
      featherArrowDownRight,
      lucideArrowDownRight,
      lucideArrowUpRight,
      ionLogoDiscord,
      ionLogoInstagram,
      ionLogoTwitter
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
