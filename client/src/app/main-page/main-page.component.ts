import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  addQuestionForm: FormGroup;
  progressForm: any={
    mode: 'determinate',
    value: 0
  };

  questions: any = [];

  constructor(private _snackBar: MatSnackBar, private router: Router, private apiService: ApiService) {
    this.addQuestionForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      content: new FormControl(null, Validators.required),
      coords: new FormControl(null)
    })
  }

  getCurrentLocation = () => {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((pos: GeolocationPosition)=>{
        let coords = `${pos.coords.latitude}, ${pos.coords.longitude}`;
        this.addQuestionForm.controls['coords'].setValue(coords)
      }, (err : GeolocationPositionError)=>{
        console.log(err);
      })
    } else {
      this._snackBar.open("Geolocation is not supported by this browser.","Close", {
        duration: 4000
      });
    }
  }

  onSubmit = () => {
    this.questions.push({
      title: 
    })
  }
}
