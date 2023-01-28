import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {

  registerForm: FormGroup;
  progressForm: any={
    mode: 'determinate',
    value: 0
  };

  constructor(private _snackBar: MatSnackBar, private router: Router, private apiService: ApiService) {
    this.registerForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.email),
      password: new FormControl(null, Validators.required),
      password_confirmation: new FormControl(null, Validators.required)
    })
  }

  onSubmit = () =>{
    if(this.registerForm.valid){
      this.progressForm.mode= 'indeterminate';
      this.apiService.registerUser(
        this.registerForm.get('name')?.value,
        this.registerForm.get('email')?.value,
        this.registerForm.get('password')?.value,
        this.registerForm.get('password_confirmation')?.value
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
    this.registerForm.reset();
  }

}
