import { NgModule } from '@angular/core';

import { CamelizePipe } from './camelize.pipe';
import { EvalPipe } from './evval.pipe';
import { HyphenizePipe } from './hyphenize.pipe';
import { InterpolatePipe } from './interpolate.pipe';
import { PathPipe } from './path.pipe';
import { PluckPipe } from './pluck.pipe';
import { PrintfPipe } from './printf.pipe';
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
