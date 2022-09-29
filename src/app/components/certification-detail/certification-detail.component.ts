import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Studies } from 'src/app/interfaces/studies';
import { StudiesService } from 'src/app/services/studies.service';

@Component({
  selector: 'app-certification-detail',
  templateUrl: './certification-detail.component.html',
  styleUrls: ['./certification-detail.component.scss']
})
export class CertificationDetailComponent implements OnInit {

  id!: number;
  storedTheme?: string | null = localStorage.getItem('theme-color') || 'theme-blue';
  studies?: Studies[];

  constructor(private route: ActivatedRoute, private studiesService: StudiesService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.studies = this.getStudyById(this.id);
  }

  getStudyById(id: number){
    return this.studiesService.getStudyById(id);
  }

  changeColor(theme: string){
    localStorage.setItem('theme-color', theme);
    this.storedTheme = localStorage.getItem('theme-color');;
  }

}
