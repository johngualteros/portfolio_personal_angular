import { Component, Input, OnInit } from '@angular/core';
import { Studies } from 'src/app/interfaces/studies';
import { StudiesService } from 'src/app/services/studies.service';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.scss'],
})
export class StudiesComponent implements OnInit {
  @Input() storedTheme: any;
  studies: Studies[];
  constructor(private studiesService: StudiesService) {}

  ngOnInit(): void {
    this.studies = this.studiesService.getStudies();
  }

  getStudies() {
    return this.studiesService.getStudies();
  }
}
