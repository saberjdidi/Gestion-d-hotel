import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users = {};
  updateUser=null;
  constructor(private apiService:ApiService) { }

  ngOnInit() {
    this.apiService.getUser().subscribe(res => {
      this.users = res.json()
      console.log(res.json())
    });
  }
  deleteBtn(id){
    if(confirm('Delete User ?') == true){
      this.apiService.deleteUser(id).subscribe(res => {
        this.ngOnInit()
      });
    }
  }
  updateUserBtn(){
    this.apiService.putUser(this.updateUser._id, this.updateUser).subscribe(res => {
      this.updateUser = null;
      this.ngOnInit();
    });
  }

}
