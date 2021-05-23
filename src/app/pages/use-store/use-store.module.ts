import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UseStoreRoutingModule } from './use-store-routing.module';
import { UseStoreComponent } from './use-store.component';


@NgModule({
  declarations: [
    UseStoreComponent
  ],
  imports: [
    CommonModule,
    UseStoreRoutingModule
  ]
})
export class UseStoreModule { }
