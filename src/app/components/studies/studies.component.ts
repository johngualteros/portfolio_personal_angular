import { Component, Input, OnInit } from '@angular/core';
import { Studies } from 'src/app/interfaces/studies';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.scss'],
})
export class StudiesComponent implements OnInit {
  @Input() storedTheme: any;

  studies: Studies[] = [
    {
      id: 1,
      title: 'Técnico en Programación de software',
      image: '../assets/astronauta.png',
      link: '../assets/astronauta.png',
    },
    {
      id: 1,
      title: 'Técnico en Programación de software',
      image: '../assets/astronauta.png',
      link: '../assets/astronauta.png',
    },
    {
      id: 1,
      title: 'Técnico en Programación de software',
      image: '../assets/astronauta.png',
      link: '../assets/astronauta.png',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
