import {Component} from '@angular/core';
import {PreloadModuleResult} from 'ngx-preload-module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  logs = [];

  log(ref: PreloadModuleResult | undefined) {
    console.log('ref:', ref);
    this.logs.push(`${performance.now()} :: Finished loading module. ${!!ref ?
      ref.moduleRef.instance.constructor.name : '<Module already loaded>'}`);
  }

  now() {
    this.logs.push(`${performance.now()} :: Started loading module.`);
    return false;
  }
}
