import {ModuleWithProviders, NgModule} from '@angular/core';
import {PreloadModuleDirective} from './preload-module.directive';
import {PRELOAD_MODULE_PATHS} from './tokens';
import {PreloadMap} from './models';

@NgModule({
  declarations: [PreloadModuleDirective],
  imports: [],
  exports: [ PreloadModuleDirective]
})
export class NgxPreloadModuleModule {

  static forRoot(pathMap?: PreloadMap): ModuleWithProviders {
    return {
      ngModule: NgxPreloadModuleModule,
      providers: [
        {
          provide: PRELOAD_MODULE_PATHS,
          useValue: pathMap
        }
      ]
    };
  }

}
