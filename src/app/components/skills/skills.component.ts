import { Component, OnInit, Input } from '@angular/core';
import { Skill } from 'src/app/interfaces/skill';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  @Input() storedTheme: any;
  skills: Skill[];
  constructor(private skillsService: SkillsService) { }
  ngOnInit(): void {
    this.skills = this.getListOfSkills();
    console.log(this.skills);
  }
  getListOfSkills(){
    return this.skillsService.getListOfSkills();
  }
}
