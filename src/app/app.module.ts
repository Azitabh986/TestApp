import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { SocialLoginModule, AuthServiceConfig, FacebookLoginProvider,GoogleLoginProvider, } from 'angularx-social-login';
import { FormsModule }   from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { FlipImagesDirective } from './directives/flip-images.directive';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxQRCodeModule } from 'ngx-qrcode2';
const config = new AuthServiceConfig([
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('283096639291012')
  },
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("1016994148249-cvijokf575kprvsj6899n1ms5a213uu4.apps.googleusercontent.com")
  },
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    DashboardComponent,
    HomeComponent,
    NotFoundComponent,
    FlipImagesDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    NgxQRCodeModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    },
    AuthGuardService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
