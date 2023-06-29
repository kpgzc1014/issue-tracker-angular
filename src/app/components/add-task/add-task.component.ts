import { ProjectService } from './../../project.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/Task';
import * as dayjs from 'dayjs';
import { TaskService } from 'src/app/task.service';
import { Project } from 'src/app/Project';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  projectName ?: any
  title ?: any
  level ?: any
  issue ?: any
  day ?:any = dayjs().format('YYYY-MM-DD')
  time ?:any = dayjs().format('HH:mm:ss')

  tasks: Task[] = [];
  projects: Project[] = [];

  constructor(private taskService:TaskService,private projectService:ProjectService,private router: Router) { }

  ngOnInit(): void {
    this.projectService.getProjects().subscribe(projects => this.projects = projects)
  }

  onSubmit(){

    const newTask:Task = {
      projectName: this.projectName,
      title: this.title,
      level: this.level,
      issue: this.issue,
      day: this.day,
      time: this.time
    }

    this.addTask(newTask)

    this.title = ''
    this.level = ''
    this.issue = ''
    this.day = ''
    this.time = ''

    this.router.navigate(['/']);

  }

  addTask(task:Task){
    this.taskService.addTask(task).subscribe((task) => (this.tasks.push(task)));
  }

}
