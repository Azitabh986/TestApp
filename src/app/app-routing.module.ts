import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { AuthGuardService } from './guards/auth-guard.service';


const routes: Routes = [ {
  path: '',
  component: HomeComponent
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
    component: DashboardComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
