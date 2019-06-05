import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserInterface } from 'src/app/models/user-interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  private user: UserInterface ={
    name:"",
    email:"",
    password:""
  };

  ngOnInit() {
  }

  login(){
    return this.authService
    .loginuser(this.user.email, this.user.password)
    .subscribe(
      data => {
        console.log(data);
        this.authService.setUser(data);
        let token = data.id;
        this.authService.setToken(token);
      }, 
      error => console.log(error)
    );
  }

  register(): void{
    this.authService.registerUser(this.user.name, this.user.email, this.user.password)
    .subscribe(user => {
      console.log(user);
    })
  }
}
