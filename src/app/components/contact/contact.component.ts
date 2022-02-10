import { Component, OnInit } from '@angular/core';
import { Global } from '../../services/global';
import { GlobalService } from '../../services/global.service';
import { Contact } from '../../models/contact';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [GlobalService]
})
export class ContactComponent implements OnInit {

  public contact: Contact;

  constructor(
    private _globalService: GlobalService
  ) { 
    this.contact = {
      email: '',
      subject: '',
      message: ''
    };    
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this._globalService.sendContactEmail(this.contact).subscribe(
      response => {
        if(response.status == 'success') {
          Swal.fire({
            title: 'Email sent!',
            text: response.message,
            icon: 'success',
            confirmButtonText: 'Cool!'
          }).then(() => {
            this.clearFields();
          });
        }
      },
      error => {}
    );
  }

  private clearFields() {
    this.contact = {
      email: '',
      subject: '',
      message: ''
    };  
  }

}
