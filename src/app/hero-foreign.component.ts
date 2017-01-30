import { Component } from '@angular/core';
import { BusService } from './bus.service';

@Component({
  moduleId: module.id,
  selector: 'hero-foreign',
  templateUrl: './hero-foreign.component.html'
})
export class HeroForeignComponent {

	constructor(private bus: BusService) {

	}

  onClick() { 
  	console.log(`HeroForeignComponent was clicked; will send message`);
  	this.bus.clickButton("Hola!");
  }
}