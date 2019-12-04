import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../_services/loader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private loader:LoaderService) { }

  ngOnInit() {
    this.loader.setLoader(false);
  }

}
