import {InjectionToken} from '@angular/core';
import {PreloadMap} from './models';

export const PRELOAD_MODULE_PATHS = new InjectionToken<PreloadMap>("PRELOAD_MODULE_PATHS");
