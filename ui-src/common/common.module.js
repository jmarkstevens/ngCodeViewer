import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {COMMON_DECLARATIONS} from './common.declarations';

@NgModule({
  imports: [CommonModule],
  declarations: [COMMON_DECLARATIONS],
  providers: [],
  exports: [COMMON_DECLARATIONS, CommonModule]
})
export class JmsCommon {}
