import { Component, OnInit,AfterViewInit } from '@angular/core';
import { LoaderService } from '../_services/loader.service';
import { AuthGuardService } from '../guards/auth-guard.service';
import { Router } from '@angular/router';
import { setDefaultService } from 'selenium-webdriver/chrome';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,AfterViewInit {
  likeContent:any;
  dislikeContent:any
  qrdata:string='';
  elementType : 'url' | 'canvas' | 'img' = 'url';
  showLoader:boolean=true;
valueNew : string='https://facebook.com/';
  constructor(private loader:LoaderService,private auth:AuthGuardService,private route:Router) { }

  ngOnInit() {
    setTimeout(function(){
      this.showLoader=false;
     },10)
    this.auth.canActivate().subscribe(data=>{
      if(data)
      {
        this.route.navigate(['login'])
      }
      else
      this.route.navigate(['home'])

    })
    if(sessionStorage.getItem('like')!=null)
      {
        this.likeContent=sessionStorage.getItem('like');
        this.valueNew+=sessionStorage.getItem('firstName');
        this.valueNew+=+sessionStorage.getItem('lastName');
        // this.value=sessionStorage.getItem('imgUrl');
      }
      else
      this.dislikeContent=sessionStorage.getItem('dislike');
      

  }
  ngAfterViewInit(){
    this.showLoader=true;
 
  }

}
