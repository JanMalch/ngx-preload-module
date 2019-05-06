>This libary was an experiment and has never been released. Use established library like [ngx-loadable](https://github.com/mohammedzamakhan/ngx-loadable) or [ngx-quicklink](https://github.com/mgechev/ngx-quicklink)

[![npm version](https://badge.fury.io/js/ngx-preload-module.svg)](https://badge.fury.io/js/ngx-preload-module)

# ngx-preload-module

A small library to help you preload Angular modules, to improve perceived performance.

>Check out the [demo](https://janmalch.github.io/ngx-preload-module) to learn more.

## Usage

First of all you have to add your lazy modules to the `angular.json`.

```json
"projects": {
    "my-project": {
      "architect": {
        "build": {
            "lazyModules": [
              "src/app/foo/foo.module",
              "src/app/bar/bar.module",
              "src/app/foobar/foobar.module"
            ]
```

To load a module you have to specify the path to the module file.
```typescript
const fooPath = 'src/app/foo/foo.module#FooModule';
```

To use this library you have to import the `NgxPreloadModuleModule` in your core module.
You can pass an object to have handy shorthands for the module paths.

```typescript
@NgModule({
  imports: [
    NgxPreloadModuleModule.forRoot({
      BarModule: 'src/app/bar/bar.module#BarModule',
      Foobar: 'src/app/foobar/foobar.module#FoobarModule'
    })
  ]
})
export class AppModule {
}
```

## Loading a module

To load the modules you can either use the `NgxPreloadModuleService` or the `preloadModule` directive.

### `NgxPreloadModuleService`

The service exposes a `load` method, that returns `Observable<PreloadModuleResult>`.
A `PreloadModuleResult` consists of the following:

```typescript
interface PreloadModuleResult {
  usedPath: string;
  factory: NgModuleFactory<any>;
  moduleRef: NgModuleRef<any>;
}
```

If the module is already loaded, the observable will return `undefined`.

### `preloadModule` directive

To load a module on a hover event you can use the following template:

```html
<button preloadModule #myPreloader="preloadModule"
        (result)="log($event)"
        (mouseover)="myPreloader.load('BarModule')">
  Foo (mouseover)</button>
```

The `(result)` is the output of the services `load` observable.

You can also share a preloader between multiple buttons

```html
<ng-container preloadModule #preloader="preloadModule" (result)="log($event)"></ng-container>
<button (mouseover)="preloader.load('src/app/foo/foo.module#FooModule')">Foo (mouseover)</button>
<button (click)="preloader.load('BarModule')">Bar (click)</button>
```
