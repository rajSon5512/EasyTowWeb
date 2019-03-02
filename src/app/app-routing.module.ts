import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginReactiveformComponent } from './login-reactiveform/login-reactiveform.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth/auth.guard'
import { NoPageComponent } from './no-page/no-page.component';

const routes: Routes = [

    {path:'',redirectTo:'/login-reactiveform',pathMatch:'full'},
    {path:"login-reactiveform",component:LoginReactiveformComponent},
    {path:"dashboard",component:DashboardComponent,canActivate:[AuthGuard]},
    {path:"no-page",component:NoPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
