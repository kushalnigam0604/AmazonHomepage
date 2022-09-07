import { Injectable } from '@angular/core';
import { Observable , Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  private subject = new Subject<any>();

  sendValue(Val : string){
    this.subject.next(Val);
  }

  getValue() : Observable<any>{
    return this.subject.asObservable();
  }
}
