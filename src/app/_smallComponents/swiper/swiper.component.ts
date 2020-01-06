import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss']
})
export class SwiperComponent implements OnInit {

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
  images=[];
  constructor() { }

  ngOnInit() {
  }

}
