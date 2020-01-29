import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NewapiService } from '../_services/newService.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-world-news',
  templateUrl: './world-news.component.html',
  styleUrls: ['./world-news.component.scss']
})
export class WorldNewsComponent implements OnInit,AfterViewInit { 
  mArticles: Array<any>;
  showLoader:boolean=false;

  constructor(private worldNews:NewapiService,private router:Router) { }

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
}
