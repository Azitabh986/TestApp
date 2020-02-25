import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/_services/login.service';



@Component({
  selector:'app-google-security',
  templateUrl: './recaptcha.component.html'
})
export class RecaptchaComponent implements OnInit {
    node: any;

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }
  resolved(event)
  {
    // console.log(event)
    this.loginService.setShowPrivacy(true);
    sessionStorage.setItem('captcha',event);
  }
}