import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.css']
})
export class ListContactComponent implements OnInit {
  contact = [];
  updateContact=null;
  constructor(private apiService:ApiService) { }

  ngOnInit() {
    this.apiService.getContact().subscribe(res=>{
      this.contact = res.json();
    });
  }
  deleteBtn(id){
    if(confirm('Supprimer contact !') == true){
      this.apiService.deleteContact(id).subscribe(res=>{
        this.ngOnInit()
      });
    }
  }
  updateContactBtn(){
    this.apiService.putContact(this.updateContact._id, this.updateContact).subscribe(res => {
      this.updateContact = null;
      this.ngOnInit();
    });
  }

}
