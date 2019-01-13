import {Component} from '@angular/core';
import {PreloadModuleResult} from 'ngx-preload-module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fooLogs = [];
  barLogs = [];
  reactionTest: { event: string, message: string, time: number }[];

  fooLog(ref: PreloadModuleResult | undefined) {
    console.log('ref:', ref);
    this.fooLogs.unshift(`${performance.now().toString().padEnd(18)} :: Finished: ${!!ref ?
      ref.usedPath : '<Module already loaded>'}`);
  }

  fooNow() {
    this.fooLogs.unshift(`${performance.now().toString().padEnd(18)} :: Started`);
    return false;
  }

  barLog(ref: PreloadModuleResult | undefined) {
    console.log('ref:', ref);
    this.barLogs.unshift(`${performance.now().toString().padEnd(18)} :: Finished: ${!!ref ?
      ref.usedPath : '<Module already loaded>'}`);
  }

  barNow() {
    this.barLogs.unshift(`${performance.now().toString().padEnd(18)} :: Started`);
    return false;
  }

  fooBarHover(): boolean {
    const start = performance.now();
    const firstTime = this.reactionTest === undefined;
    if (firstTime) {
      this.reactionTest = [{event: 'hover', message: 'You hovered over the button and the module started loading.', time: start}];
    }
    return firstTime;
  }

  fooBarClick() {
    const clicked = performance.now();
    this.reactionTest = [...this.reactionTest, {event: 'click', message: 'You actually clicked the button.', time: clicked}];
  }

  perfFinished(ref: PreloadModuleResult | undefined) {
    const finished = performance.now();
    if (ref !== undefined) {
      this.reactionTest = [...this.reactionTest, {event: 'finish', message: 'The module finished loading.', time: finished}];
    }
  }

  getPerformanceResult(): string {
    if (!this.reactionTestFinished) {
      return '';
    }

    const hovered = this.reactionTest.find(x => x.event === 'hover').time;
    const clicked = this.reactionTest.find(x => x.event === 'click').time;
    const finished = this.reactionTest.find(x => x.event === 'finish').time;

    const sorted = this.reactionTest.sort((a, b) => a.time - b.time)
      .map(({time, message}) => `<b>${time.toFixed(1)}ms:</b> ${message}`);

    sorted.push(
      '',
      `Module finished loading <b>${(finished - hovered).toFixed(1)}ms</b> after hovering!`,
      `Module finished loading <b>${(clicked - finished).toFixed(1)}ms</b> before clicking!`,
    );

    return sorted.join('<br/>');
  }

  get reactionTestFinished(): boolean {
    return this.reactionTest !== undefined && this.reactionTest.length === 3;
  }

}
