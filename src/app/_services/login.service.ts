import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { setDefaultService } from 'selenium-webdriver/chrome';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  

  public socialLogin=new Subject<object>();
  public booleanButton=new Subject<boolean>();
  getCountryId=new Subject<string>();
  public showPrivacy=new Subject<boolean>();

  setUserHead(val){
    this.socialLogin.next(val);
    sessionStorage.setItem('TokenId', val); 
    sessionStorage.setItem('firstName',val.firstName)
    sessionStorage.setItem('lastName',val.lastName)
    sessionStorage.setItem('imgUrl',val.photoUrl);
  }
  setBooleanButton(val)
  {
    this.booleanButton.next(val);
  }
  getBooleanButton()
  {
    return this.booleanButton.asObservable();
  }
  setGetCountryId(value)
  {
    this.getCountryId.next(value);
  }
  getGetCountryId()
  {
    return this.getCountryId.asObservable();
  }

  setShowPrivacy(value)
  {
    this.showPrivacy.next(value);
  }
  getShowPrivacy()
  {
    return this.showPrivacy.asObservable();
  }
  
}
