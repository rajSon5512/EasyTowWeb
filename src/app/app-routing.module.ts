import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginReactiveformComponent } from './login-reactiveform/login-reactiveform.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [

    {path:'',redirectTo:'/login-reactiveform',pathMatch:'full'},
    {path:"login-reactiveform",component:LoginReactiveformComponent},
    {path:"dashboard",component:DashboardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
