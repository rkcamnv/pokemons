import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [{
  path: '', component: LayoutComponent, children: [
    { path: '', redirectTo: '/store', pathMatch: 'full' },
    { path: 'store', loadChildren: () => import('../pages/use-store/use-store.module').then(m => m.UseStoreModule) },
    { path: 'service', loadChildren: () => import('../pages/user-service/user-service.module').then(m => m.UserServiceModule) },
  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
