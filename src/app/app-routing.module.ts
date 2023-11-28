import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { KidsComponent } from './kids/kids.component';
import { HeaderComponent } from './header/header.component';
import { StudioComponent } from './studio/studio.component';
import { BeatyComponent } from './beaty/beaty.component';
import { HomeLivingComponent } from './home-living/home-living.component';


const routes: Routes = [
  // {path:'',component:HeaderComponent},
  {path:'login',component:LoginComponent},
  {path:'men',component:MenComponent},
  {path:'women',component:WomenComponent},
  {path:'kids',component:KidsComponent},
  {path:'home',component:HeaderComponent},
  {path:'beauty',component:BeatyComponent},
  {path:'studio',component:StudioComponent},
  {path:'homeLiving',component:HomeLivingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
