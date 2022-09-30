import { Injectable } from '@angular/core';
import { Project } from '../interfaces/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    {
      id: 1,
      name: 'Weather App',
      description: 'Web application that shows the weather of a city through a search engine made in django using the requests library to make http requests with the python programming language.',
      image: '../../../assets/projects/weather_ app.png',
      github: 'https://github.com/johngualteros/climate_app',
      technologies: ['Django', 'Python', 'Html', 'Css', 'Bootstrap'],
    },
    {
      id: 2,
      name: 'Portfolio (this project)',
      description: 'This is my personal portfolio, made with angular with a lot of love and dedication. It is fully responsive. For this project, I used several libraries offered by Angular. includes dark mode and theme selector such as red, blue etc.',
      image: '../../../assets/portoflio_01.jpg',
      github: 'https://github.com/johngualteros/portfolio_personal_angular',
      technologies: ['Angular', 'Typescript', 'Html', 'Sass']
    },
    {
      id: 3,
      name: 'Eskrive',
      description: 'Questions and answers forum, this project was the senasoft challenge, an administrator creates questions and a user can answer those questions, the architecture is with RESTful.',
      image: '../../../assets/projects/eskrive.png',
      github: 'https://github.com/JohnGualteros6402/front_end_desarrollo_integral',
      technologies: ['Angular', 'Typescript', 'Html', 'Css', 'Bootstrap', 'Java', 'SpringBoot', 'MySql'],
      secondaryAccount: 'https://github.com/JohnGualteros6402',
      primaryAccount: 'https://github.com/johngualteros'
    }
  ];
  constructor() { }

  getProjects(): Project[] {
    return this.projects;
  }
  getProjectById(id: number){
    return this.projects.filter(project => project.id == id);
  }
}
