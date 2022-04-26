import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'trackfilter'
})

export class TrackFilterpipe  implements PipeTransform{
 
    transform(list: any,args:any = '') {
          if(args.length > 0){
            return  list.filter((user:any)=>user.name.toLowerCase().includes(args.toLowerCase()))
          }else{
             return  list;
          }
    }

}