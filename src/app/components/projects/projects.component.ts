import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/app/interfaces/project';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  @Input() storedTheme: any;

  projects: Project[];
  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.projects = this.getProjects();
  }

  private getProjects(): Project[] {
    return this.projectsService.getProjects();
  }

}
