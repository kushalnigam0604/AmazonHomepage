import { Injectable , Injector } from '@angular/core';
import { HttpInterceptor} from '@angular/common/http';
import { Observable } from 'rxjs';
import { APIService } from './api.service';

@Injectable()
export class IntercepterService implements HttpInterceptor{

  constructor(private _injector:Injector) { }

  intercept(req : any, next : any){
    let apiToken = this._injector.get(APIService);
    let tokenReq = req.clone({setHeaders:{
      Authorization:`Bearer ${apiToken.getToken()}`
    }})
    return next.handle(tokenReq);
  }
}
