import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

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
