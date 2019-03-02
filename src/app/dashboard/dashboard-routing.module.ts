import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { FindVehicleComponent } from '../find-vehicle/find-vehicle.component';
import { AuthGuard } from '../auth/auth.guard';


const routes: Routes = [

    {path:"dashboard",
    component:DashboardComponent,
    canActivate:[AuthGuard],
    children:[{

      path:'',
      children:[{
        path:'find-vehicle',component:FindVehicleComponent
      }]

    }]
  
    }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
