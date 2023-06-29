import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from './Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private apiUrl = 'http://localhost:3004/projects'

  constructor(private http:HttpClient) { }

  getProjects(): Observable<Project[]>{
    return this.http.get<Project[]>(this.apiUrl)
  }
}
