import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../interface/api.service';




@Component({
  selector: 'app-api-component',
  templateUrl: './api-component.component.html',
  styleUrl: './api-component.component.scss'
})
export class ApiComponentComponent implements OnInit {

 data : any[] = []

 constructor ( private apiService : ApiService ) {}


 ngOnInit(): void {
   this.llenarData();
 }
llenarData (){   this.apiService.getData().subscribe( data => {
     this.data = data;
     console.log(this.data);
   }) }
 }
