import { ProjectService } from './../../project.service';
import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/Project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = []

  constructor(private projectService:ProjectService) { }

  ngOnInit(): void {
    this.projectService.getProjects().subscribe(projects => this.projects = projects)
  }


}
