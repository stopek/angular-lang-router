import { NgModule } from '@angular/core';
import { PluckPipe } from './pluck.pipe';
import { InterpolatePipe } from './interpolate.pipe';
import { HyphenizePipe } from './hyphenize.pipe';
import { CamelizePipe } from './camelize.pipe';
import { PrintfPipe } from './printf.pipe';
import { PathPipe } from './path.pipe';
import { EvalPipe } from './evval.pipe';
import { TranslatePipe } from './translate.pipe';

const PIPES = [
  PluckPipe,
  InterpolatePipe,
  HyphenizePipe,
  CamelizePipe,
  PrintfPipe,
  PathPipe,
  EvalPipe,
  TranslatePipe,
];

@NgModule({
  declarations: PIPES,
  exports: PIPES,
})
export class InterpolationPipesModule {}
