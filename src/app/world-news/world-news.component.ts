import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NewapiService } from '../_services/newService.service';
import { Router } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-world-news',
  templateUrl: './world-news.component.html',
  styleUrls: ['./world-news.component.scss']
})
export class WorldNewsComponent implements OnInit,AfterViewInit { 
  mArticles: Array<any>;
  showLoader:boolean=false;
  title:string='See More Content'

  constructor(private worldNews:NewapiService,private router:Router,public translateService: TranslateService) {
    translateService.addLangs(['en', 'fr']);
    // translate.setDefaultLang('en');
    // const browserLang = translate.getBrowserLang();
    // translate.use(browserLang.match(/en|fr/) ? browserLang : 'fr');
    // this.translate.use('fr')
   }

  ngOnInit() {
      this.worldNews.initArticles().subscribe(data => {
        if(data){
          this.mArticles = data['articles'];
          this.showLoader=true;
        }
        else
        this.router.navigate['**'];
      })
  }
  ngAfterViewInit(){
    // this.showLoader=true;
  }
  switchLanguage(language: string) {
    this.translateService.use(language);
  }
}
