import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginauthService } from '../service/loginauth.service';

@Component({
  selector: 'app-login.controller',
  templateUrl: './login.controller.component.html',
  styleUrls: ['./login.controller.component.css']
})
export class Login implements OnInit {

  constructor(private loginauthService:LoginauthService,private router:Router) { }
  username = ''
  password = ''
  invalidLogin = false

  ngOnInit() {
  }
  checkLogin() {
    (this.loginauthService.authenticate(this.username, this.password).subscribe(
      (data) => {
        this.router.navigate([''])
        this.invalidLogin = false
      },
      (error) => {
        this.invalidLogin = true
      }
    )
    );
  }

}
