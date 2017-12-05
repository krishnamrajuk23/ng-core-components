import { NgModule } from '@angular/core';
import { CoreModules } from '../../core/core.module';
import { CommonModule } from '@angular/common';

import { SmartTableComponent } from './components';

const sharedComponents =[
  SmartTableComponent
];

@NgModule({
    declarations:[
      ...sharedComponents
    ],
    imports:[
      CoreModules,
      CommonModule
    ],
    exports:[ ...sharedComponents ]
})

export class SharedModule{

}
