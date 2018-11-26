import { TestBed } from '@angular/core/testing';

import { NgxPreloadModuleService } from './ngx-preload-module.service';

describe('NgxPreloadModuleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxPreloadModuleService = TestBed.get(NgxPreloadModuleService);
    expect(service).toBeTruthy();
  });
});
