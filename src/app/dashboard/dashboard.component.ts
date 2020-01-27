import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsapiService } from '../_services/newsapi.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit,AfterViewInit  {
  ngAfterViewInit(): void {
    this.showLoader=true;
    throw new Error("Method not implemented.");
  }
  checkLike:boolean;
  mArticles: Array<any>;
  count:number=0;
  showLoader:boolean;
  constructor(private getService : NewsapiService) { }
  ngOnInit() {
    this.getService.initArticles().subscribe(data => this.mArticles = data['articles']);  
    // this.showLoader=true;

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
