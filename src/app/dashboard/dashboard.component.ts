import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { LoginService } from '../_services/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
 
  constructor(private getService : LoginService) {
   
    
    
   }


  ngOnInit() {
    
    
  }


    
  
}
