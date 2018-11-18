import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as jwt_decode from "jwt-decode";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
