import { Component, OnInit } from '@angular/core';
import { LoginService } from '../_services/login.service';
import { Router } from '@angular/router';
import { LoaderService } from '../_services/loader.service';
import { AuthGuardService } from '../guards/auth-guard.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showButton:boolean=false;
  firstName:string;
  lastName:string;
  image:string;
  showQRCode:boolean;
  myAngularxQrCode: string;
  constructor(private loginService:LoginService,  private route:Router,private loader:LoaderService,private auth:AuthGuardService) {
    this.myAngularxQrCode = 'Your QR code data string';

      
   }

  ngOnInit() {
    this.loginService.getBooleanButton().subscribe(res => {
      this.showButton=res;
    });
    
  }
  ngAfterViewInit()
  {
    this.firstName= sessionStorage.getItem('firstName')
    this.lastName= sessionStorage.getItem('lastName')
    this.image=sessionStorage.getItem('imgUrl');
    if(sessionStorage.getItem('TokenId')!=null)
      this.loginService.setBooleanButton(true)
  }
  logout()
  {
    sessionStorage.removeItem('TokenId')
    sessionStorage.removeItem('firstName')
    sessionStorage.removeItem('lastName')
    sessionStorage.removeItem('imgUrl')
    window.location.reload();
    this.showButton=false;
    this.route.navigate(['home']);
    this.loader.setLoader(true);
  }
  showQR(){
    this.showQRCode=true;
  }
  loginFun(){
    this.loader.setLoader(true);
    this.auth.canActivate().subscribe(res=>{
      if(res)
        this.route.navigate(['login'])
      
    })
  }

}
