import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { LocalAppSharedModule } from 'app/shared/shared.module';
import { LocalAppCoreModule } from 'app/core/core.module';
import { LocalAppAppRoutingModule } from './app-routing.module';
import { LocalAppHomeModule } from './home/home.module';
import { LocalAppEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    LocalAppSharedModule,
    LocalAppCoreModule,
    LocalAppHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    LocalAppEntityModule,
    LocalAppAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class LocalAppAppModule {}
