import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { BsDashboardComponent } from './pages/bs-dashboard/bs-dashboard.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { BsAdminPanelComponent } from './pages/bs-admin-panel/bs-admin-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    BsDashboardComponent,
    BsAdminPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor (library: FaIconLibrary){
    library.addIcons(
      faBootstrap
    );
  }

}
