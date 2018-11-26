import {NgModuleFactory, NgModuleRef} from '@angular/core';

export interface PreloadMap {
  [name: string]: string;
}

export interface PreloadModuleResult {
  factory: NgModuleFactory<any>;
  moduleRef: NgModuleRef<any>;
}
