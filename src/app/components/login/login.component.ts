import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/Admin';
import { ADMINS } from 'src/app/mock-admins';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email?: any
  password?: any
  admins: Admin[] = []

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.admins = ADMINS
  }

  adminLogin(){
    this.admins.map((admin) => {
      if(admin.email === this.email && admin.password === this.password){
        this.email = ''
        this.password = ''
        localStorage.setItem("loginUser", admin.name);
        this.router.navigate(['/']);
      }
    })
  }

}
