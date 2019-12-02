import { Component, OnInit } from '@angular/core';
import { LoginService } from '../_services/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showButton:boolean;
  firstName:string;
  lastName:string;
  image:string;
  constructor(private loginService:LoginService, private route:Router) {
 
      
   }

  ngOnInit() {
    this.loginService.getBooleanButton().subscribe(res => {
      this.showButton=res;
    });
    
  }
  ngAfterViewInit()
  {
   
    this.firstName= sessionStorage.getItem('firstName')
   this.firstName= sessionStorage.getItem('lastName')
    this.image=sessionStorage.getItem('imgUrl');
  }
  logout()
  {
    sessionStorage.removeItem('TokenId')
    sessionStorage.removeItem('firstName')
    sessionStorage.removeItem('lastName')
    sessionStorage.removeItem('imgUrl')
    this.route.navigate(['/login'])
    this.showButton=false;
  }

}
