import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore'; 
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginReactiveformComponent } from './login-reactiveform/login-reactiveform.component';
import { environment } from 'src/environments/environment'
import { AngularFireAuthModule } from '@angular/fire/auth';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NoPageComponent } from './no-page/no-page.component';
import { FindVehicleComponent } from './find-vehicle/find-vehicle.component';
import { DashboardRoutingModule } from './dashboard/dashboard-routing.module'

@NgModule({
  declarations: [
    AppComponent,
    LoginReactiveformComponent,
    DashboardComponent,
    NoPageComponent,
    FindVehicleComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.FirebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    DashboardRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
