import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-add-tarif',
  templateUrl: './add-tarif.component.html',
  styleUrls: ['./add-tarif.component.css']
})
export class AddTarifComponent implements OnInit {
   addForm:FormGroup;
  constructor(private apiService:ApiService) { }

  ngOnInit() {
    this.addForm = new FormGroup({
      prix : new FormControl('', [Validators.required]),
      typeService : new FormControl('', [Validators.required])
    });
  }
  tarifBtn(){
    if (this.addForm.valid){
      this.apiService.postTarif(this.addForm.value).subscribe( res => {
        this.ngOnInit();
      });
    }
  }

}
