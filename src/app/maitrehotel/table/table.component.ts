import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  table = {};
  updateTable=null;

  constructor(private apiService:ApiService) { }

  ngOnInit() {
    this.apiService.getTable().subscribe(res => {
      this.table = res.json();
    });
  }
  deleteBtn(id){
    if(confirm('Delete Table ?') == true){
      this.apiService.deleteTable(id).subscribe(res => {
        this.ngOnInit()
      });
    }
  }
  updateTableBtn(){
    this.apiService.putTable(this.updateTable._id, this.updateTable).subscribe(res => {
      this.updateTable = null
      this.ngOnInit()
    });
  }

}
