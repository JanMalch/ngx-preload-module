import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class FooModule {
  constructor() {
    console.log("Loaded Foo");
  }
}
