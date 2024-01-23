import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './myComponent/Feachture/users/login/users.component';
import { RegisterComponent } from './myComponent/Feachture/users/register/register.component';

const routes: Routes = [
  { path:'login',component:UsersComponent },
  { path:'register',component:RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
