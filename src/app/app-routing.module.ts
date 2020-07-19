import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';
import { LoginformComponent } from './loginform/loginform.component';
import { JsonDataComponent } from './json-data/json-data.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignupComponent } from './components/signup/signup.component';
import { ResisterComponent } from './components/resister/resister.component';
import { ShappingCart1Component } from './component-one/shapping-cart1/shapping-cart1.component';
import { LoginComponent } from './component-one/login/login.component';
import { RegisterOneComponent } from './component-one/register-one/register-one.component';
import { PageNotFound1Component } from './component-one/shared-one/page-not-found1/page-not-found1.component';

const routes: Routes = [
//   {path:'', component:HomepageComponent },
//   {
//   path:'login', component: LoginformComponent
// },
// {
//   path:'json', component: JsonDataComponent
// },
// {path:'',redirectTo:'/register', pathMatch:"full" },
// {path:'login', component:SignupComponent},
// {path:'register', component:ResisterComponent},
// {path:'**', component:PageNotFoundComponent}
{path: '', redirectTo:'/shop', pathMatch:'full'},
{path:'login', component: LoginComponent},
{path:'register', component:RegisterOneComponent},
{path:'shop', component: ShappingCart1Component},
{path: '**', component:PageNotFound1Component}
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
