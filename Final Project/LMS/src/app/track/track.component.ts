import { Component, Input } from "@angular/core";
import { User } from "../service/services.model";
import { LaundaryUserService } from "../service/user.services";

@Component({
    selector:'app-track',
    templateUrl:'./track.component.html'
})
export class TrackComponent{
  tracking:any = ''
  filterby:any='';
    userdata:Array<User> = [
        { 
          name : '' ,
          item: '',
          phone:'',
          quantity : '',
          trackingid:0,
          status:''
        }
      ];
      constructor( private us:LaundaryUserService ){}
      reload(){
        // this.us.getUsers().subscribe((res:any) => this.userdata = res);
      }
      ngOnInit(){
        this.reload();
        console.log()
      }

      findValue(){
        this.us.getUsers().subscribe({
          next: (res)=>{
      // console.log(res);
      const res1=Object.values(res);
      const user=res1.filter(a=>{
        console.log(typeof (a.trackingid) )
        console.log(typeof Number(this.tracking))
             return a.trackingid===Number(this.tracking)
            })
            if(user){
              this.userdata=user;
            }else{
              console.log('error bro')
            }
          }
        })
      }

}