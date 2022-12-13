import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { WelcomeComponent } from './admin/welcome/welcome.component';
import { AuthentificationGuard } from './auth/authentification.guard';
import { PermissionGuard } from './auth/permission.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'admin',
    component: WelcomeComponent,
    canActivate:[AuthentificationGuard],
    canActivateChild:[PermissionGuard],
    children: [
      { path: 'add-user', component: AddUserComponent },
      { path: 'add-product', component: AddProductComponent },
    ],
  },
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
