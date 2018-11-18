import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-add-facture',
  templateUrl: './add-facture.component.html',
  styleUrls: ['./add-facture.component.css']
})
export class AddFactureComponent implements OnInit {
  addForm:FormGroup;

  constructor(private router:Router, private apiService: ApiService) { }

  ngOnInit() {
    
    this.addForm = new FormGroup({
      date: new FormControl(''),
      montant: new FormControl(''),
    });
  }

  factureBtn(){
    if(this.addForm.valid){
      this.apiService.postFacture(this.addForm.value).subscribe(res => {
        this.ngOnInit();
        console.log(res.json());
      });
    }
  }

}
