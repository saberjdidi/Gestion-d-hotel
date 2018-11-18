import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-add-salle',
  templateUrl: './add-salle.component.html',
  styleUrls: ['./add-salle.component.css']
})
export class AddSalleComponent implements OnInit {

  addForm : FormGroup;

  constructor(private router:Router, private apiService:ApiService) { }

  ngOnInit() {
    this.addForm = new FormGroup({
      etatSalle: new FormControl('', [Validators.required]),
      typeSalle: new FormControl('', [Validators.required]),
    });
  }
  salleBtn(){
    if(this.addForm.valid){
      this.apiService.postSalle(this.addForm.value).subscribe(res => {
        this.ngOnInit()
        console.log(res.json())
      });
    }
  }

}
