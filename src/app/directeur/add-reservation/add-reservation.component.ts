import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.css']
})
export class AddReservationComponent implements OnInit {
  client = {};
  chambre = {};
  salle = {};
  table = {};
  addForm : FormGroup;
  constructor(private router:Router, private apiService:ApiService) { }

  ngOnInit() {
    this.addForm = new FormGroup({
      dateReservation: new FormControl('', [Validators.required]),
      dateArrive: new FormControl('', [Validators.required]),
      dateDepart: new FormControl('', [Validators.required]),
      nombrePersonne: new FormControl('', [Validators.required]),
      client: new FormControl('', [Validators.required]),
      chambre: new FormControl('', [Validators.required]),
      salle: new FormControl('', [Validators.required]),
      table: new FormControl('', [Validators.required]),
    });
    
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

  }
  reservationBtn(){
    if(this.addForm.valid){
      this.apiService.postReservation(this.addForm.value).subscribe(res => {
        console.log(res.json());
        this.ngOnInit();
      });
    }
  }

}
