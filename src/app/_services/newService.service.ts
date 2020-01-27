import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Subject } from 'rxjs';
import { NewsapiService } from './newsapi.service';
import { LoginService } from './login.service';
@Injectable({
  providedIn: 'root'
})
export class NewapiService {

  api_key='0902809c02e94198afcf34de5b199b70';
  id;
  
  constructor(private httpClient:HttpClient,private some:LoginService) { 
    this.some.getGetCountryId().subscribe(res=>{
      this.id=res;
    })
  }
  
  
   initArticles(){
   if(this.id)
    return this.httpClient.get('https://newsapi.org/v2/top-headlines?country='+this.id+'&apiKey='+this.api_key);
    // https://newsapi.org/v2/top-headlines?country=in&apiKey=0902809c02e94198afcf34de5b199b70
   }
  
  
}


