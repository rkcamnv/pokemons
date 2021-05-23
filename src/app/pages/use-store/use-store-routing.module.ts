import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UseStoreComponent } from './use-store.component';

const routes: Routes = [{ path: '', component: UseStoreComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UseStoreRoutingModule { }
