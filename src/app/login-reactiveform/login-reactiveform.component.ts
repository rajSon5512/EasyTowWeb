import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validator, Validators } from '@angular/forms' 
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-login-reactiveform',
  templateUrl: './login-reactiveform.component.html',
  styleUrls: ['./login-reactiveform.component.css']
})
export class LoginReactiveformComponent implements OnInit {

  myForm:FormGroup;
  errorMsg:boolean;

  constructor(private fb:FormBuilder,private firebase:AngularFireAuth,private router:Router,
    private authService:AuthService) { }

  ngOnInit() {

      this.createForm();
  }

  get control(){
    return this.myForm.controls;
  } 

  get emailError(){
    return JSON.stringify(this.control.email.errors);
  }

  createForm(){

    this.myForm=this.fb.group({
      email:[undefined,[Validators.required,Validators.email]],
      password:[undefined,[Validators.required,Validators.minLength(6)]]
   });
 
  }


  beforehide(){
    console.log("here berofehide");
    return false;

  }

  login(value:any){

    var email=this.myForm.value.email;
    var password=this.myForm.value.password;

    console.log("called login");

    var islogin=this.authService.login(email,password);

      delay(1000);

      islogin=true;

      console.log("islogin=",islogin)
      
      if(islogin){

          console.log("helloworld")
          this.router.navigate(["/dashboard"]);
      }else{

        console.log("faild login");
      }


   }

}
