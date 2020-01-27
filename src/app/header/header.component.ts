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
  today;
  countries=['Argentina','Australia','Austria','Belgium','Brazil','Bulgaria','Canada','China','Colombia','Cuba','Czech Republic','Egypt','France','Germany','Greece',
    'Hong Kong','Hungary','India','Indonesia','Ireland','Israel','Italy','Japan','Latvia','Lithuania','Malaysia','Mexico','Morocco','Netherlands','New Zealand',
    'Nigeria','Norway','Philippines','Poland','Portugal','Romania','Russia','Saudi Arabia','Serbia','Singapore','Slovakia','Slovenia','South Africa','South Korea',
    'Sweden','Switzerland','Taiwan','Thailand','Turkey','UAE','Ukraine','United Kingdom','United States','Venuzuela']

    countriesId=['ar','au','at','be','br','bg','ca','cn','co','cu','cz','eg','fr','de','gr',
    'hk','hu','in','id','ie','il','it','jp','lv','lt','my','mx','ma','nl','nz',
    'ng','no','ph','pl','pt','ro','ru','sa','rs','sg','sk','si','za','kr',
    'se','ch','tw','th','tr','ae','ua','gb','us','ve']
  constructor(private loginService:LoginService,  private route:Router,private loader:LoaderService,private auth:AuthGuardService) {
    this.myAngularxQrCode = 'Your QR code data string';
    setInterval(() => {this.today = Date.now()}, 1);
      
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
  selectedCountry(value)
  {
    if(value){
      for(let i=1;i<this.countries.length;i++)
      {
        if(this.countries[i]==value)
        {
          this.loginService.setGetCountryId(this.countriesId[i]);
          this.route.navigate(['dashboard']);
          // console.log(this.countriesId[i])
        }
      }
    }
  }
  navigate()
  {
    this.route.navigate(['worldNews']);
  }
}
