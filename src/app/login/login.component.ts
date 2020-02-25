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
  showPrivacy:boolean;
  
  items$: Observable<any[]>;

  constructor( private socialAuthService: AuthService, private loginService:LoginService, private router: Router) {}
  ngOnInit() {
    this.loginService.getShowPrivacy().subscribe(res=>{
      this.showPrivacy=res;
    })
    if(sessionStorage.getItem('captcha'))
      this.showPrivacy=true;
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
        // console.log(socialPlatform+" sign in data : " , userData);
        // Now sign-in with userData        
        if (userData != null) {
               this.authorized = true;
               this.user = userData;  
               this.loginService.setUserHead(this.user);
               window.location.reload();
               this.router.navigate(['home']);
               sessionStorage.removeItem('captcha');
            }       
      }
    );
      
  }
      submitForm(value)
      {
        // console.log(value)
        sessionStorage.setItem('TokenId', '12312bjh3b1hj23'); 
        sessionStorage.setItem('firstName',value.userName)
        sessionStorage.setItem('lastName',value.password)
        sessionStorage.setItem('imgUrl','');
        this.showPrivacy=true;
        this.router.navigate(['home']);
        this.loginService.setBooleanButton(true)
        
      }

}
