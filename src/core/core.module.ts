import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableRowComponent,
  TableColumnComponent,
  TableBodyComponent } from './components';

const coreComponents = [
  TableRowComponent,
  TableColumnComponent,
  TableBodyComponent
];

@NgModule({
    declarations: [
      ...coreComponents
    ],
    imports:[
      CommonModule
    ],
    providers:[],
    exports:[...coreComponents]
})

export class CoreModules{

}
