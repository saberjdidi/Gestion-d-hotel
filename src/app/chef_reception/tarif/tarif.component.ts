import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-tarif',
  templateUrl: './tarif.component.html',
  styleUrls: ['./tarif.component.css']
})
export class TarifComponent implements OnInit {
  tarif = {};
  updateTarif = null;

  constructor(private router:Router, private apiService:ApiService) { }

  ngOnInit() {
    this.apiService.getTarif().subscribe(res => {
      this.tarif = res.json()
      console.log(res.json())
    });
  }

  deleteBtn(id){
    if(confirm('Delete Tarif !!') == true){
      this.apiService.deleteTarif(id).subscribe(res => {
        this.ngOnInit()
      });
    }
  }
  updateTarifBtn(){
    this.apiService.putTarif(this.updateTarif._id, this.updateTarif).subscribe(res => {
      this.updateTarif = null
      this.ngOnInit()
    });
  }

}
