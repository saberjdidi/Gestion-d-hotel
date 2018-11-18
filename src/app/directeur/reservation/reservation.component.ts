import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  client = {};
  chambre = {};
  salle = {};
  table = {};
  reservation = {};
  updateReservation=null;

  constructor(private router:Router, private apiService:ApiService) { }

  ngOnInit() {
    this.apiService.getClient().subscribe(res => {
      this.client = res.json()
      console.log(res.json())
    });
    this.apiService.getChambre().subscribe(res => {
      this.chambre = res.json();
      console.log(res.json());
    });
    this.apiService.getSalle().subscribe(res => {
      this.salle = res.json();
      console.log(res.json());
    });
    this.apiService.getTable().subscribe(res => {
      this.table = res.json();
    });

    this.apiService.getReservation().subscribe(res => {
      this.reservation = res.json();
      console.log(res.json());
    });
  }

  deleteBtn(id){
    if(confirm('Are you sure to delete reservation') == true){
      this.apiService.deleteReservation(id).subscribe(res => {
        this.ngOnInit()
      });
    }
  }
  updateReservationBtn(){
    this.apiService.putReservation(this.updateReservation._id, this.updateReservation).subscribe(res => {
      this.updateReservation = null;
      this.ngOnInit();
    });
  }

}
