import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PluginComponent } from './plugin/plugin.component';



@NgModule({
  declarations: [PluginComponent],
  exports: [PluginComponent],
  imports: [
    CommonModule
  ]
})
export class DighubPluginModule { }
