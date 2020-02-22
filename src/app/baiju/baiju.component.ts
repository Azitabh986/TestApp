import { Component, OnInit } from '@angular/core';
import { temp } from './baihu';

@Component({
  selector: 'app-baiju',
  templateUrl: './baiju.component.html',
  styleUrls: ['./baiju.component.scss']
})
export class BaijuComponent implements OnInit {
  data: any;
  p=0;
  data1: { "footer": any; "title": string; "overview": { "title": string; "details": { "value": string; "label": string; "datatype": string; "fieldName": any; "editable": boolean; }[]; }[]; };
  constructor() { }

  ngOnInit() {
    this.data1 = temp;
    this.data = this.data1;
    console.log('data', this.data);
  }
  callFun(event) {
    let searhDetails: any[][];
    
    let temp = event.target.value;
    temp += '';
    console.log(temp.length)
    for( let j = 0; j < this.data1.overview.length; j++) {

      for (let i = 0; i < this.data1.overview[j].details.length; i++) {
        // console.log(this.data.overview[0].details[i])
        let search = this.data1.overview[j].details[i].value;
        search += '';
        console.log(search)
        if (temp.length > 0 && temp == search.substring(0, temp.length)){
          searhDetails[this.p++][0]=this.data1.overview[j];
        }
        console.log(searhDetails)
      }
    }
    this.data = searhDetails;
  }
}
