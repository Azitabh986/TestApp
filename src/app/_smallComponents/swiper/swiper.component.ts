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
  images=['./assets/images/1.jpg',
          './assets/images/2.jpeg','./assets/images/4.jpg','./assets/images/5.jpg'];
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
