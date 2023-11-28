import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WomenComponent } from './women/women.component';
import { MenComponent } from './men/men.component';
import { KidsComponent } from './kids/kids.component';
import { BeatyComponent } from './beaty/beaty.component';
import { StudioComponent } from './studio/studio.component';
import { HomeLivingComponent } from './home-living/home-living.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    WomenComponent,
    MenComponent,
    KidsComponent,
    BeatyComponent,
    StudioComponent,
    HomeLivingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
