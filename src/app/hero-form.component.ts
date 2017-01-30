import { Component } from '@angular/core';

import { BusService } from './bus.service';
import { Hero } from './hero';

@Component({
  moduleId: module.id,
  selector: 'hero-form',
  templateUrl: './hero-form.component.html'
})
export class HeroFormComponent {

  constructor(private bus: BusService) {
    bus.buttonClicked$.subscribe(msg => {
      console.log(`HERO-FORM: got msg: ${msg}`);
      this.onSubmit();
    });
  }

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit() { this.submitted = true; console.log(`submitted ${JSON.stringify(this.model)}`); }

  newHero(): void {
    this.model = new Hero(42, '', '');
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}