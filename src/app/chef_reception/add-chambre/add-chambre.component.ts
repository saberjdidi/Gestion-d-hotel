import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-add-chambre',
  templateUrl: './add-chambre.component.html',
  styleUrls: ['./add-chambre.component.css']
})
export class AddChambreComponent implements OnInit {
  addForm : FormGroup;
  constructor(private router:Router, private apiService:ApiService) { }

  ngOnInit() {
    this.addForm = new FormGroup({
      numeroChambre: new FormControl('', [Validators.required]),
      nombrePlace: new FormControl('', [Validators.required]),
      typeChambre: new FormControl('', [Validators.required]),
    })
  }

  chambreBtn(){
    if(this.addForm.valid){
      this.apiService.postChambre(this.addForm.value).subscribe(res => {
        this.ngOnInit();
        console.log(res.json())
      });
    }
  }

}
