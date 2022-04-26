import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "./services.model";
import { LaundaryUserService } from "./user.services";
@Component({
    selector:'app-user',
    templateUrl: './service.component.html',
   styles : [`
   input.ng-valid.ng-touched{
       border : 2px solid greenyellow
   }
   input.ng-invalid.ng-touched{
       border : 2px solid crimson
   }
`]
})


export class ServiceComponent{
    name:any='';
    phone:any='';
    item='';
    quantity='';
    trakingid:any=Math.round(Math.random()*500000)
    showInput = true;
    clicked = true
    userdata:Array<User> = [
        { 
          name : 'Kanav' ,
          item: 'ldjsl',
          phone:'',
          quantity : '',
          trackingid:0,
          status:'Recieved'
        }
      ];
      newuserdata:User = { 
        name : '',
        phone:'',
        item : '',
        quantity : '',
        trackingid:this.trakingid,
        status:'Recieved'
      };
      constructor(private us:LaundaryUserService,private router:Router){}
      addNewUser(){
           
           console.log(this.newuserdata)
            this.router.navigate(['/service']);
            this.us.postUsers(this.newuserdata).subscribe(res => {
               this.newuserdata = { 
                      name : '',
                          phone:'',
                        item : '',
                        quantity: '',
                         trackingid:0,
                         status:'Recieved'
          };
          
    })
      }
}
