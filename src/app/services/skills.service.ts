import { Injectable } from '@angular/core';
import { Skill } from '../interfaces/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  skills: Skill[] = [
    {
      id: 1,
      title: 'Html',
      image: '../../assets/logos_portfolio/html.png'
    },
    {
      id: 2,
      title: 'Css',
      image: '../../assets/logos_portfolio/css.webp'
    },
    {
      id: 3,
      title: 'Sass',
      image: '../../assets/logos_portfolio/sass.png'
    },
    {
      id: 4,
      title: 'Javascript',
      image: '../../assets/logos_portfolio/JavaScript.png'
    },
    {
      id: 5,
      title: 'Bootstrap',
      image: '../../assets/logos_portfolio/Bootstrap.png'
    },
    {
      id: 6,
      title: 'Tailwind',
      image: '../../assets/logos_portfolio/Tailwind.png'
    },
    {
      id: 7,
      title: 'Typescript',
      image: '../../assets/logos_portfolio/Typescript.svg'
    },
    {
      id: 8,
      title: 'Angular',
      image: '../../assets/logos_portfolio/Angular.png'
    },
    {
      id: 9,
      title: 'MySQL',
      image: '../../assets/logos_portfolio/MySQL.png'
    },
    {
      id: 10,
      title: 'PostgreSQL',
      image: '../../assets/logos_portfolio/postgre.png'
    },
    {
      id: 11,
      title: 'MongoDB',
      image: '../../assets/logos_portfolio/mongo.png'
    },
    {
      id: 12,
      title: 'Java',
      image: '../../assets/logos_portfolio/java.png'
    },
    {
      id: 13,
      title: 'Python',
      image: '../../assets/logos_portfolio/python.png'
    },
    {
      id: 14,
      title: 'Spring',
      image: '../../assets/logos_portfolio/spring.png'
    },
    {
      id: 15,
      title: 'Django',
      image: '../../assets/logos_portfolio/django.png'
    },
    {
      id: 16,
      title: 'Git',
      image: '../../assets/logos_portfolio/git.png'
    },
    {
      id: 17,
      title: 'Docker',
      image: '../../assets/logos_portfolio/docker.webp'
    },
    {
      id: 18,
      title: 'AWS',
      image: '../../assets/logos_portfolio/aws.png'
    }

  ];
  constructor() { }

  getListOfSkills(): Skill[]{
    return this.skills;
  }
}
