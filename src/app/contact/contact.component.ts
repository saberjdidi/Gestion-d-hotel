import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  lat: number = 36.8189700;
  lng: number = 10.1657900;
  contactForm : FormGroup;
  constructor(private apiService:ApiService) { }

  ngOnInit() {
    this.contactForm = new FormGroup({
      nom : new FormControl(''),
      email: new FormControl(''),
      sujet: new FormControl(''),
      message: new FormControl('')
    });
  }
  contactBtn(){
    if(this.contactForm.valid){
      this.apiService.postContact(this.contactForm.value).subscribe(res => {
        console.log(res.json());
        this.ngOnInit();
      });
    }
  }

}
