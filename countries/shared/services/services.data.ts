import { Injectable } from "@angular/core";
import { country } from "../../model/country";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class DataService {
url:string="https://restcountries.eu/rest/v2/all";
countriesarray:Array<country>;

constructor(private http:HttpClient) {

    this.http.get(this.url).subscribe((x:country[])=>{
this.countriesarray=x;
console.log(this.countriesarray);
    })


    
}





}