import { Component, OnInit } from '@angular/core';
import { temp } from './baihu';

@Component({
  selector: 'app-baiju',
  templateUrl: './baiju.component.html',
  styleUrls: ['./baiju.component.scss']
})
export class BaijuComponent implements OnInit {
  pendingApprovalList: any;
  p=0;
  filteredPendingApprovalList: any;
  constructor() { }

  ngOnInit() {
    this.pendingApprovalList = temp;
    this.filteredPendingApprovalList = temp;
  }
  filterApprovalList(event: any) {
    let searchValue = event.target.value;
    searchValue += '';
    if (searchValue && searchValue.trim() !== '') {
      // tslint:disable-next-line: prefer-for-of
      for (let k = 0; k < this.pendingApprovalList.length; k++) {
        // tslint:disable-next-line: prefer-for-of
        for (let j = 0; j < this.pendingApprovalList[k].notificationJSONArray.length; j++) {
          // this.filteredPendingApprovalList[k].notificationJSONArray = [];
          // tslint:disable-next-line: prefer-for-of
          for (let i = 0; i < this.pendingApprovalList[k].notificationJSONArray[j].overview.details.length; i++) {
            let value = this.pendingApprovalList[k].notificationJSONArray[j].overview.details[i].value;
            value += '';
            // console.log(this.pendingApprovalList)
            if (searchValue === value.substring(0, searchValue.length)) {
              this.filteredPendingApprovalList[k].notificationJSONArray.push(this.pendingApprovalList[k].notificationJSONArray[j]);
            }
          }
        }
      }
    } else if (searchValue.trim() === '') {
      this.filteredPendingApprovalList = this.pendingApprovalList;
    }
  }

}
