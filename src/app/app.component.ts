import { Component } from '@angular/core';

import { BusService } from './bus.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  providers: [BusService]
})
export class AppComponent { 
	constructor(private bus: BusService) {
		bus.buttonClicked$.subscribe(msg => {console.log(`APP: got msg: ${msg}`);});
	}
}