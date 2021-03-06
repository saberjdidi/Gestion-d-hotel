import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-chambre-reserver',
  templateUrl: './chambre-reserver.component.html',
  styleUrls: ['./chambre-reserver.component.css']
})
export class ChambreReserverComponent implements OnInit {
  chambre = {};
  updateChambre = null;
  constructor(private router:Router, private apiService:ApiService) { }

  ngOnInit() {
    this.apiService.getChambre().subscribe(res => {
      this.chambre = res.json();
      console.log(res.json());
    });
  }
  deleteBtn(id){
    if(confirm('Delete Chambre ?') == true){
      this.apiService.deleteChambre(id).subscribe(res => {
        this.ngOnInit();
      });
    }
  }
  updateChambreBtn(){
    this.apiService.putChambre(this.updateChambre._id, this.updateChambre).subscribe(res => {
      this.updateChambre = null;
      this.ngOnInit();
    });
  }

}
