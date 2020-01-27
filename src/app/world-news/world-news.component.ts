import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NewapiService } from '../_services/newService.service';

@Component({
  selector: 'app-world-news',
  templateUrl: './world-news.component.html',
  styleUrls: ['./world-news.component.scss']
})
export class WorldNewsComponent implements OnInit,AfterViewInit { 
  mArticles: Array<any>;
  showLoader:boolean=false;

  constructor(private worldNews:NewapiService ) { }

  ngOnInit() {
    
      this.worldNews.initArticles().subscribe(data => {
        this.mArticles = data['articles'];
      })
      
      console.log(this.mArticles)

    

    
  }
  ngAfterViewInit(){
    this.showLoader=true
  }
}