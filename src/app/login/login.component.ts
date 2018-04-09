import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { AuthenticationService } from './authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  error = '';
  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.loginForm = formBuilder.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    // this.authenticationService
    //   .authenticate(this.loginForm.value)
    //   .subscribe(
    //     data => {
    //       localStorage.setItem('id_token', data.token);
    //       this.router.navigate(['post']);
    //     },
    //     error => this.error = error.message
    //   );
  }

}
