import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  addForm : FormGroup;
  
  constructor(private router:Router, private apiService:ApiService) { }

  ngOnInit() {
    this.addForm = new FormGroup({
      nom: new FormControl('', [Validators.required]),
      prenom: new FormControl('', [Validators.required]),
      telephone: new FormControl('', [Validators.required]),
      adresse: new FormControl('', [Validators.required]),
      nationalite: new FormControl('', [Validators.required]),
      dateArrive: new FormControl(''),
      dateDepart: new FormControl(''),
      email: new FormControl('', [Validators.email])
    });
  }

  clientBtn(){
    if(this.addForm.valid){
      this.apiService.postClient(this.addForm.value).subscribe( res => {
        this.ngOnInit();
        console.log(res.json());
      });
    }
  }

}
