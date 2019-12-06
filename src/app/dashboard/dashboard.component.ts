import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsapiService } from '../_services/newsapi.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  checkLike:boolean;
  mArticles: Array<any>;
  count:number=0;
  constructor(private getService : NewsapiService) { }
  ngOnInit() {
    this.getService.initArticles().subscribe(data => this.mArticles = data['articles']);  
  }
  flipImages(title){
    this.count++;
    if(this.count%2==0){
      this.checkLike=false;
      sessionStorage.setItem('like',title)
    }
     
    else
      {
        this.checkLike=true;
      sessionStorage.setItem('dislike',title)
      }
  }
  setDefault()
  {
    this.checkLike=false;
  }
}
