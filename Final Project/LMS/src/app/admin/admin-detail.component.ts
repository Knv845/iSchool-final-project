import { Component } from "@angular/core";
import { User } from "../service/services.model";
import { LaundaryUserService } from "../service/user.services";

@Component({
    selector:'app-admindetail',
    templateUrl:'./admin-detail.component.html'
})

export class DetailComponent {
  showEditBox = false;
  // recieved:any='Recieved and ready to wash '
  userToUpdate = {
    name : '' ,
    item: '',
    quantity : '',
    phone:'',
    trackingid:0,
    status:'',
    _id:''
  };

      userdata:Array<User> = [
          { 
            name : 'Kanav' ,
            item: 'ldjsl',
            quantity : '',
            phone:'',
            trackingid:0,
            status:'Recieved',
          }
        ];
       
        constructor( private us:LaundaryUserService ){}
        reload(){
          this.us.getUsers().subscribe((res:any) => this.userdata = res);
        }
        ngOnInit(){
          this.reload();
        }
        deleteUser(user:any){
          console.log(user);
          this.us.deleteUser(user._id).subscribe((res) => {
            console.log(res);
          })
        }
      editUser(user:any){
        this.us.getUserToEdit(user._id).subscribe((res:any) => {
            this.userToUpdate = res;
            this.showEditBox = true;
        })
      }
      updateUserInfo(userid:any){
        this.us.postUserToEdit(userid,this.userToUpdate).subscribe(res=>{
          
          this.userToUpdate = { 
            name : '' ,
            item: '',
            quantity : '',
            phone:'',
            trackingid:0,
            status : '',
            _id : '',
          };
          
        });this.showEditBox = false;
        this.reload();
      }
      

}