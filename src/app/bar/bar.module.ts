import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class BarModule {
  constructor() {
    console.log("Loaded Bar");
  }
}
