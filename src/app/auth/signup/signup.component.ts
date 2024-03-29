import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  // MSFrom1970ToNow = Date.now();
  // dateObj = new Date();
  maxDate: Date;

  constructor(private authService: AuthService) { }
  ngOnInit(): void {
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  }

  onSubmit(form: NgForm) {
    console.log(form);
    this.authService.registerUser({email: form.value.email, password: form.value.password});

    // console.log(this.MSFrom1970ToNow);            // time in milliseconds since 1970
    // console.log(this.dateObj.getDate());          // TodayNum
    // console.log(this.dateObj.getDay());           // indexOfDay
    // console.log(this.dateObj.getFullYear());      // YearNum
    // console.log(this.dateObj.getHours());         // HourNum
    // console.log(this.dateObj.getMilliseconds());  // HourNum
  }
}
