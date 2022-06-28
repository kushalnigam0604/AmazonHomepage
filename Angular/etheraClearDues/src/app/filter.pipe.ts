

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(arr:any[], selected:boolean, time:string ): any[] {
     const newarr=arr.filter((ele:any)=>{
       return ele.checked==selected;
     })
 
     return newarr;
  }

}