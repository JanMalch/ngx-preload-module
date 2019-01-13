import {Directive, EventEmitter, OnDestroy, Output} from '@angular/core';
import {NgxPreloadModuleService} from './ngx-preload-module.service';
import {PreloadModuleResult} from './models';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Directive({
  selector: '[preloadModule]', // tslint:disable-line
  exportAs: 'preloadModule'
})
export class PreloadModuleDirective implements OnDestroy {

  private onDestroy$ = new Subject();
  @Output() private result = new EventEmitter<PreloadModuleResult>();

  constructor(private service: NgxPreloadModuleService) {
  }

  load(pathModuleTemplate: string) {
    this.service.load(pathModuleTemplate).pipe(
      takeUntil(this.onDestroy$)
    ).subscribe(value => this.result.next(value));
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

}
