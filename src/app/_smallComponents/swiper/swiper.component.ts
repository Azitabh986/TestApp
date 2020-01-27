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
  images=['http//images.ctfassets.net/kvbvpznvvttu/4izXuyot5mOAAbbus9aTPC/f3137232abc55526f449113046bf1763/amazon_promo.png?h=250',
          'http//images.ctfassets.net/kvbvpznvvttu/4izXuyot5mOAAbbus9aTPC/f3137232abc55526f449113046bf1763/amazon_promo.png?h=250'];
  constructor() { }

  ngOnInit() {
  }

}
