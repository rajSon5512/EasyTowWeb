import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { Observable,of} from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  
    isloggedIn=false;

    redirectedUrl:string;

    login(email:string,password:string):any{

      this.auth.auth.signInWithEmailAndPassword(email,password)
                             .then((success)=>{
    
                             console.log(success);
                              
                              this.isloggedIn=true;
                              console.log("islogged=",this.isloggedIn);
                              return true; 
                
                             }).catch(function(error){
    
                              this.isloggedIn=false;
                               console.log("failed");
                               console.log(error);
                                
                            }) 
                           
                            
                            return false;
                             
    }

    logout():void{

      this.isloggedIn=false;
      this.router.navigate(["/login-reactiveform"]);
    }

    get loginVariable(){
 
      return this.isloggedIn;
    }

  constructor(private auth:AngularFireAuth,private router:Router) { }
}
