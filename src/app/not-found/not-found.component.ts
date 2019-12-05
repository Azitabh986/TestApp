import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
  likeContent: string;
  dislikeContent: string;

  constructor() { }

  ngOnInit() {
    if(sessionStorage.getItem('like')!=null)
    {
      this.likeContent=sessionStorage.getItem('like');
    }
    else
    this.dislikeContent=sessionStorage.getItem('dislike');
  }

}
