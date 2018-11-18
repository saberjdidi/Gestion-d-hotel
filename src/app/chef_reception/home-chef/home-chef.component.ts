import { Component, OnInit } from '@angular/core';
import * as jwt_decode from "jwt-decode";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-chef',
  templateUrl: './home-chef.component.html',
  styleUrls: ['./home-chef.component.css']
})
export class HomeChefComponent implements OnInit {
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
