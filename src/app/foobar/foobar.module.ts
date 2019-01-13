import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class FoobarModule {
  constructor() {
    console.log("Loaded Foobar");
  }
}
