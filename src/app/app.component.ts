import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio_personal_angular';

  isDark: boolean = localStorage.getItem('theme') === 'dark' ? true : false;
  storedTheme?: string | null = localStorage.getItem('theme-color') || 'theme-blue';
  language: string = localStorage.getItem('language') || 'en';

  constructor(public translate: TranslateService){
    this.translate.addLangs(['en', 'es']);
    this.translate.setDefaultLang('en');
    this.translate.use(this.language);
  }

  ngOnInit(){
    this.addDarkMode(this.isDark);
    this.changeLanguage(this.language);
  }

  changeTheme(){
    this.isDark = !this.isDark;
    this.addDarkMode(this.isDark);
  }
  addDarkMode(modeTheme: boolean){
    if(modeTheme === true){
      localStorage.setItem('theme', 'dark');
      document.body.classList.add('dark');
    }else{
      localStorage.setItem('theme', 'light');
      document.body.classList.remove('dark');
    }
  }
  changeColor(theme: string){
    localStorage.setItem('theme-color', theme);
    this.storedTheme = localStorage.getItem('theme-color');;
  }

  changeLanguage(language:string){
    localStorage.setItem('language', language);
    this.translate.use(language);
  }

}
