import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-salle',
  templateUrl: './salle.component.html',
  styleUrls: ['./salle.component.css']
})
export class SalleComponent implements OnInit {
   salle = {};
   updateSalle=null;
  constructor(private router:Router, private apiService:ApiService) { }

  ngOnInit() {
    this.apiService.getSalle().subscribe(res => {
      this.salle = res.json();
      console.log(res.json());
    });
  }
  deleteBtn(id){
    if(confirm("Delete Salle reserver") == true){
      this.apiService.deleteSalle(id).subscribe(res => {
        this.ngOnInit()
      });
    }
  }
  updateSalleBtn(){
    this.apiService.putSalle(this.updateSalle._id, this.updateSalle).subscribe(res => {
      this.updateSalle = null;
      this.ngOnInit();
    });
  }

}
