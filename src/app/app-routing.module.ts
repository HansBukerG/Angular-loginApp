import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './loginPackage/login/login.component';
import { MainComponent } from './loginPackage/main/main.component';
import { RegisterComponent } from './loginPackage/register/register.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard'


const routes: Routes = [

{
  path:'login/register',
  component: RegisterComponent
},
{
  path:'login',
  component: LoginComponent
},
{
  path:'login/main',
  component: MainComponent,
  ...canActivate(() => redirectUnauthorizedTo(['login']))
},
{
  path:'**',
  component: LoginComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
