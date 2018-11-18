import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent implements OnInit {
  addForm:FormGroup;
  facture = {};
  updateFacture = null;
  constructor(private router:Router, private apiService: ApiService) { }

  ngOnInit() {
    
    this.apiService.getFacture().subscribe(res => {
      this.facture = res.json();
      console.log(res.json());
    });
  }

  deleteBtn(id){
    if(confirm('Delete Facture ?') == true){
      this.apiService.deleteFacture(id).subscribe(res => {
        this.ngOnInit();
      });
    }
  }

  updateFactureBtn(){
    this.apiService.putFacture(this.updateFacture._id, this.updateFacture).subscribe(res => {
      this.updateFacture = null;
      this.ngOnInit();
    });
  }

}
