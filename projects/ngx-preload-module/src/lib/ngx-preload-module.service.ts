import {Inject, Injectable, Injector, NgModuleFactoryLoader} from '@angular/core';
import {from, Observable, of} from 'rxjs';
import {PRELOAD_MODULE_PATHS} from './tokens';
import {PreloadMap, PreloadModuleResult} from './models';

@Injectable({
  providedIn: 'root'
})
export class NgxPreloadModuleService {

  private readonly moduleSet = new Set<string>();

  constructor(
    private loader: NgModuleFactoryLoader,
    private injector: Injector,
    @Inject(PRELOAD_MODULE_PATHS) private paths: PreloadMap) {
  }

  load(pathModuleTemplate: string): Observable<PreloadModuleResult> {
    const path = this.paths[pathModuleTemplate] || pathModuleTemplate;
    if (this.moduleSet.has(path)) {
      return of(undefined);
    }
    this.moduleSet.add(path);
    return from(this.loader.load(path).then(moduleFactory =>
      ({moduleRef: moduleFactory.create(this.injector), factory: moduleFactory})
    ));
  }
}

