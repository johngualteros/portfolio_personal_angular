import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  showLoading(){
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 2000);
    this.alertSended();
  }
  alertSended(){
    this.isSend = true;
    setTimeout(() => {
      this.isSend = false;
    }, 2000);
  }
  async onSubmit(contactForm: NgForm) {
    if (contactForm.valid) {
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http.post('https://formspree.io/f/xjvzrknq',
        { name: this.contact.name, replyto: this.contact.email, message: this.contact.message },
        { 'headers': headers }).subscribe(
          response => {
            console.log(response);
          }
        );
        this.alertSended();
      }
    this.contact = {
      name: '',
      email: '',
      message: ''
    };
  }

}
