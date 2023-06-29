import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/Task';
import * as dayjs from 'dayjs';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-read-only-task',
  templateUrl: './read-only-task.component.html',
  styleUrls: ['./read-only-task.component.css']
})
export class ReadOnlyTaskComponent implements OnInit {
  @Input() task?:Task
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onEditTask: EventEmitter<Task> = new EventEmitter();

  tasks: Task[] = []
  user ?:any
  id ?:number
  projectName ?: any
  title ?: any
  level ?: any
  issue ?: any
  day ?:any = dayjs().format('YYYY-MM-DD')
  time ?:any = dayjs().format('HH:mm:ss')

  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
  }

  onDelete(task:any){
    this.onDeleteTask.emit(task);
  }

  onEdit(task:any){

    this.onEditTask.emit(task)
  }

  get loginUser(){
    this.user = this.taskService.loginUser()
    return this.user
  }


}
