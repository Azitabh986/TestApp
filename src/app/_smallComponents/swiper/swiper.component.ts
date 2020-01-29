import { Component, OnInit, AfterViewInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { LoaderService } from 'src/app/_services/loader.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss']
})
export class SwiperComponent implements OnInit,AfterViewInit{

  public swiperConfig: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 3,
    observer: true,
    keyboard: true,
    mousewheel: true,
    navigation: false,
    pagination: true,
    autoplay: true,
    speed: 700,
    loop: true
  };
  images=['https://drive.google.com/open?id=1igAoPgWmUk9dgWvyxTE7c8-NTKxLgNSp',
          'https://drive.google.com/open?id=1igAoPgWmUk9dgWvyxTE7c8-NTKxLgNSp'];
  constructor(private loader:LoaderService, private router:Router) { }

  ngOnInit() {
  }
  ngAfterViewInit(){
    this.loader.setLoader(true);
 
  }
  showMsg()
  {
    window.alert('some text')
  }
  

}
