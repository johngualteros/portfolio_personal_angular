import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-studies',
  templateUrl: './card-studies.component.html',
  styleUrls: ['./card-studies.component.scss']
})
export class CardStudiesComponent implements OnInit {

  @Input() study: any;

  constructor() { }

  ngOnInit(): void {
  }

}
