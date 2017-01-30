import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';                  //? analogous to Review
import { HeroFormComponent } from './hero-form.component';        //? analogous to Survey
import { HeroForeignComponent } from './hero-foreign.component';  //? analogous to Footer

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,        
    HeroFormComponent,
    HeroForeignComponent
  ],
  exports: [HeroFormComponent, HeroForeignComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }