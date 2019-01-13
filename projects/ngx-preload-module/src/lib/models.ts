import {NgModuleFactory, NgModuleRef} from '@angular/core';

export interface PreloadMap {
  [name: string]: string;
}

export interface PreloadModuleResult {
  usedPath: string;
  factory: NgModuleFactory<any>;
  moduleRef: NgModuleRef<any>;
}
