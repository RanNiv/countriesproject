import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { DataService } from '../shared/services/services.data';
import { country } from '../model/country';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-countriespage',
  templateUrl: './countriespage.component.html',
  styleUrls: ['./countriespage.component.css']
})
export class CountriespageComponent implements  OnChanges {
  
  ngOnChanges(changes: SimpleChanges): void {

console.log("test change");
    //this.countriesdata=this.data.countriesarray.filter(x=>x.name.indexOf(this.countrysearch)>-1);
  }
  countrysearch:string="A";

  countriesdata:Array<country>;
  constructor(private data:DataService) { 
this.countriesdata=this.data.countriesarray.filter(x=>x.name.indexOf(this.countrysearch)>-1);



  }


  onKey(event: any) { 
    
    this.countriesdata=this.data.countriesarray.filter(x=>x.name.indexOf(this.countrysearch)>-1 ||x.capital.indexOf(this.countrysearch)>-1 );
  }

  
}