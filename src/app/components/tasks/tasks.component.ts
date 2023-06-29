import { Task } from './../../Task';
import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {
  tasks: Task[] = []
  task?: any
  id?: number
  projectName?: any
  title ?: any
  level ?: any
  issue ?: any
  day ?:any = dayjs().format('YYYY-MM-DD')
  time ?:any = dayjs().format('HH:mm:ss')

  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks)
  }

  deleteTask(task: any){
    this.taskService.deleteTask(task).subscribe(() => (this.tasks = this.tasks.filter(t => t.id !== task.id)))
  }

  getEditTask(task:any){
    this.title = task.title
    this.level = task.level
    this.issue = task.issue
    this.projectName = task.projectName
    return this.task = task
  }

  onSave(){
    const newTask = {
      id:  this.task?.id,
      projectName: this.projectName,
      title: this.title,
      level: this.level,
      issue: this.issue,
      day: this.day,
      time: this.time
    }

    this.taskService.updateTask(newTask).subscribe(() => this.ngOnInit())

  }

}
