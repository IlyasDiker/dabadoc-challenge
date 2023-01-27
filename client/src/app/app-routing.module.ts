import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';

const routes: Routes = [
  {path:'', component: MainPageComponent},
  {path:'register', component: RegisterPageComponent},
  {path:'login', component: LoginPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
