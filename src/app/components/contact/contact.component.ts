import { Component, OnInit, Input } from '@angular/core';
import { Contact } from 'src/app/interfaces/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @Input() storedTheme: any;

  contact: Contact = {
    name: '',
    email: '',
    message: ''
  };
  loading: boolean = false;
  isSend: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  sendEmail(){
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 2000);
    this.contact = {
      name: '',
      email: '',
      message: ''
    };
  }

}
