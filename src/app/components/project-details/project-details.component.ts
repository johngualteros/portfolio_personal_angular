import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/interfaces/project';
import { Studies } from 'src/app/interfaces/studies';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  id!: number;
  storedTheme?: string | null = localStorage.getItem('theme-color') || 'theme-blue';
  projects?: Project[];

  constructor(private route: ActivatedRoute, private projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.projects = this.getProjectById(this.id);
  }

  getProjectById(id: number){
    return this.projectsService.getProjectById(id);
  }

  changeColor(theme: string){
    localStorage.setItem('theme-color', theme);
    this.storedTheme = localStorage.getItem('theme-color');;
  }

}
