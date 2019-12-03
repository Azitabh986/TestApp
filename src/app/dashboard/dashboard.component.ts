import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsapiService } from '../_services/newsapi.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
 
  mArticles: Array<any>;
  constructor(private getService : NewsapiService) { }
  ngOnInit() {
    this.getService.initArticles().subscribe(data => this.mArticles = data['articles']);  
  }
  
}
