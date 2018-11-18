import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-add-table',
  templateUrl: './add-table.component.html',
  styleUrls: ['./add-table.component.css']
})
export class AddTableComponent implements OnInit {

  addForm : FormGroup;

  constructor(private apiService : ApiService) { }

  ngOnInit() {
    this.addForm = new FormGroup({
      numeroTable: new FormControl('', [Validators.required]),
      nombrePlace: new FormControl('', [Validators.required]),
      etatTable: new FormControl('', [Validators.required])
    });
  }
  tableBtn(){
    if(this.addForm.valid){
      this.apiService.postTable(this.addForm.value).subscribe(res => {
        this.ngOnInit()
        console.log(res.json())
      });
    }
  }

}
