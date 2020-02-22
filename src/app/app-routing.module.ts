import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { WorldNewsComponent } from './world-news/world-news.component';
import { BaijuComponent } from './baiju/baiju.component';


const routes: Routes = [ {
  path: '',
  component: BaijuComponent
},
{
  path: 'home',
  redirectTo: '/',
  pathMatch: 'full'
},
{
  path: 'login',
  component: LoginComponent,
  canActivate : [AuthGuardService]
},

  {
    path: 'dashboard',
    component: BaijuComponent
  },
  {
    path: 'worldNews',
    component: WorldNewsComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
