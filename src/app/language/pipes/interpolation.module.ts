import {NgModule} from '@angular/core';
import {CamelizePipe, HyphenizePipe, InterpolatePipe, PathPipe, PluckPipe, PrintfPipe} from './interpolations.pipe';

const PIPES = [PluckPipe, InterpolatePipe, HyphenizePipe, CamelizePipe, PrintfPipe, PathPipe];

@NgModule({
  declarations: PIPES,
  exports: PIPES
})
export class InterpolationPipesModule {
}
