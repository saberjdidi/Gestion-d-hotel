import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  client = {};
  updateClient = null;
  constructor(private router:Router, private apiService:ApiService) { }

  ngOnInit() {
    this.apiService.getClient().subscribe(res => {
      this.client = res.json()
      console.log(res.json())
    });
  }
  deleteBtn(id){
    if(confirm('Delete Client !!') == true){
      this.apiService.deleteClient(id).subscribe(res=>{
        this.ngOnInit()
      });
    }
  }
  updateClientBtn(){
    this.apiService.putClient(this.updateClient._id, this.updateClient).subscribe(res=> {
      this.updateClient = null
      this.ngOnInit()
    });
  }

}
