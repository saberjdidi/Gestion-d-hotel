import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as jwt_decode from "jwt-decode";

@Component({
  selector: 'app-home-reception',
  templateUrl: './home-reception.component.html',
  styleUrls: ['./home-reception.component.css']
})
export class HomeReceptionComponent implements OnInit {
  userId = '';
  constructor(private router:Router) { }

  ngOnInit() {
   const token = localStorage.getItem('token');
   const Data = jwt_decode(token).data;
   this.userId = Data
  }
  logoutBtn(){
    localStorage.clear()
    this.router.navigateByUrl('/login')
  }

}
