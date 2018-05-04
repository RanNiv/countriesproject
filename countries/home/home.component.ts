import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/services/services.data';
import { country } from '../model/country';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homecountries:Array<country>;


  constructor(private data:DataService) {
this.homecountries=data.countriesarray;


   }

  ngOnInit() {
  }

}
