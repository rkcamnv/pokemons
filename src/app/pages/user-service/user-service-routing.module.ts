import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserServiceComponent } from './user-service.component';

const routes: Routes = [{ path: '', component: UserServiceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserServiceRoutingModule { }
