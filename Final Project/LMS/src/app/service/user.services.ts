import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { User } from "./services.model";

@Injectable()

export class LaundaryUserService{
    constructor(private http:HttpClient){}
        //read
        getUsers(){
            return  this.http.get("http://localhost:5050/data");
        }
        postUsers(user:User){

            return  this.http.post("http://localhost:5050/add",user);
        }
        getUserToEdit(userid:any){
            return this.http.get("http://localhost:5050/edit/"+userid);
        }
        postUserToEdit(userid:any, user:User){
            return  this.http.post("http://localhost:5050/edit/"+userid, user);
        }
        deleteUser(id:any){
            console.log(id);
            return  this.http.delete("http://loclhost:5050/delete/"+id);
        }
    }