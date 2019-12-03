import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  api_key='0902809c02e94198afcf34de5b199b70';
  constructor(private httpClient:HttpClient) { }
  
   initArticles(){
    return this.httpClient.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey='+this.api_key);
   }
  
  
}


