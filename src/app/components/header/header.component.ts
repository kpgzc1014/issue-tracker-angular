import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user?: any

  constructor(private router:Router,private taskService:TaskService) { }

  ngOnInit(): void {
  }

  onLogin(){
    this.router.navigate(['/login']);

  }

  get loginUser(){
    this.user = this.taskService.loginUser()
    return this.user
  }

  logout(){
    localStorage.clear()
  }

}
