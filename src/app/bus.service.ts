import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class BusService {
  
  // Observable string sources
  private buttonClickedSource = new Subject<string>();  // used to communicate from hero-foreign to app
//  private buttonRelayedSource = new Subject<string>();  // used to communicate from app to hero-form

  // Observable string streams
  buttonClicked$ = this.buttonClickedSource.asObservable();
//  buttonRelayed$ = this.buttonRelayedSource.asObservable();

  // Service message commands
  clickButton(info: string) {
    this.buttonClickedSource.next(info);
  }

  // relayButton(info: string) {
  //   this.buttonRelayedSource.next(info);
  // }

}