import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../_services/loader.service';
import { AuthGuardService } from '../guards/auth-guard.service';
import { Router } from '@angular/router';
import { setDefaultService } from 'selenium-webdriver/chrome';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  likeContent:any;
  dislikeContent:any

  constructor(private loader:LoaderService,private auth:AuthGuardService,private route:Router) { }

  ngOnInit() {
    this.loader.setLoader(false);
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
      }
      else
      this.dislikeContent=sessionStorage.getItem('dislike');

  }

}
