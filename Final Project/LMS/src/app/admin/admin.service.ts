import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()

export class LaundaryAdminService{
    constructor(private http:HttpClient){}
        //read
        getSignup(){
            return  this.http.get("http://localhost:5050/admin");
        }
}