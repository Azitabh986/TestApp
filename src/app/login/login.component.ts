import { Component, OnInit } from '@angular/core';
import { AuthService, SocialUser, FacebookLoginProvider, GoogleLoginProvider } from 'angularx-social-login';
import { LoginService } from '../_services/login.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private user: SocialUser;
  public authorized: boolean = false;
  
  items$: Observable<any[]>;

  constructor( private socialAuthService: AuthService, private loginService:LoginService, private router: Router) {}
  ngOnInit() {
  }
  
  public socialSignIn(socialPlatform : string) {  

    let socialPlatformProvider;
    if(socialPlatform == "facebook"){
      // socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
      this.router.navigate(['**']);
    }else if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform+" sign in data : " , userData);
        // Now sign-in with userData        
        if (userData != null) {
               this.authorized = true;
               this.user = userData;  
               this.loginService.setUserHead(this.user);
               window.location.reload();
               this.router.navigate(['home']);
            }       
      }
    );
      
  }
      submitForm(value)
      {
        console.log(value)
        this.router.navigate(['home']);
        
      }

}
