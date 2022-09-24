import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.scss']
})
export class SiteComponent implements OnInit {

  storedTheme?: string | null = localStorage.getItem('theme-color') || 'theme-blue';

  constructor(){
  }
  ngOnInit(): void {
  }

  changeColor(theme: string){
    localStorage.setItem('theme-color', theme);
    this.storedTheme = localStorage.getItem('theme-color');;
  }

}
