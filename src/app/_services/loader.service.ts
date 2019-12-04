import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  showLoader=new Subject<boolean>();
  constructor() { }
  setLoader(val)
  {
    this.showLoader.next(val);
  }
  getLoader()
  {
    return this.showLoader.asObservable();
  }
}
