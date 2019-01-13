import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgxPreloadModuleModule} from 'ngx-preload-module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPreloadModuleModule.forRoot({
      BarModule: 'src/app/bar/bar.module#BarModule',
      Foobar: 'src/app/foobar/foobar.module#FoobarModule'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
