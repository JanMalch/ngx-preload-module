import {Directive, EventEmitter, Output} from '@angular/core';
import {NgxPreloadModuleService} from './ngx-preload-module.service';
import {PreloadModuleResult} from './models';

@Directive({
  selector: '[preloadModule]', // tslint:disable-line
  exportAs: 'preloadModule'
})
export class PreloadModuleDirective {

  @Output() private result = new EventEmitter<PreloadModuleResult>();

  constructor(private service: NgxPreloadModuleService) {
  }

  load(pathModuleTemplate: string) {
    this.service.load(pathModuleTemplate).subscribe(value => this.result.next(value));
  }

}
