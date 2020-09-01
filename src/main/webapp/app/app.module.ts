import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { JhipsterSandboxSharedModule } from 'app/shared/shared.module';
import { JhipsterSandboxCoreModule } from 'app/core/core.module';
import { JhipsterSandboxAppRoutingModule } from './app-routing.module';
import { JhipsterSandboxHomeModule } from './home/home.module';
import { JhipsterSandboxEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    JhipsterSandboxSharedModule,
    JhipsterSandboxCoreModule,
    JhipsterSandboxHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    JhipsterSandboxEntityModule,
    JhipsterSandboxAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class JhipsterSandboxAppModule {}
