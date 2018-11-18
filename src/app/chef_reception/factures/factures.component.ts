import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-factures',
  templateUrl: './factures.component.html',
  styleUrls: ['./factures.component.css']
})
export class FacturesComponent implements OnInit {
  facture = {};
  updateFacture = null;
  dtOptions: DataTables.Settings = {};

  constructor(private router:Router, private apiService: ApiService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
    
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
