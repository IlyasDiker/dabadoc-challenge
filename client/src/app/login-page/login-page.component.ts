import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

const { loginUser } = require('../api');
 
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  loginForm: FormGroup;
  progressForm: any={
    mode: 'determinate',
    value: 0
  };

  constructor(private _snackBar: MatSnackBar, private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl(null, Validators.email),
      password: new FormControl(null, Validators.required)
    })
  }

  onSubmit = () =>{
    if(this.loginForm.valid){
      this.progressForm.mode= 'indeterminate';
      loginUser(
        this.loginForm.get('email')?.value,
        this.loginForm.get('password')?.value
      ).then((res:any)=>{
        this.progressForm.value = 100;
        
        this._snackBar.open("Login Successfully","Close", {
          duration: 4000
        });

        this.router.navigate(['/']);
      }, ()=>{
        this.progressForm.mode = 'determinate';
      }).finally(()=>{
        this.progressForm.mode = 'determinate';
        setTimeout(()=>{
          this.progressForm.value = 0;
        }, 1000)
      })
    }
  }

  onClear = (event: any) =>{
    event.preventDefault();
    this.loginForm.reset();
  }

}
