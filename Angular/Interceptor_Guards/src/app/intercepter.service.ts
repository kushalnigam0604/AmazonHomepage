import { Injectable , Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import { APIService } from './api.service';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';

// @Injectable()
// export class IntercepterService implements HttpInterceptor{

//   constructor(private _injector:Injector) { }

//   intercept(req : any, next : any){
//     let apiToken = this._injector.get(APIService);
//     let tokenReq = req.clone({setHeaders:{
//       Authorization:`Bearer ${apiToken.getToken()}`
//     }})
//     return next.handle(tokenReq);
//   }
// }
@Injectable()
export class IntercepterService implements HttpInterceptor {
  constructor(
    private _router: Router
  ) { }
  intercept(
    request: HttpRequest<any>, next: HttpHandler
  ) : Observable<HttpEvent<any>> {
     
	const userToken = localStorage.getItem('token');

    if (userToken) {
      request = request.clone({
          headers: request.headers.set(
            'Authorization',
            userToken
          )
      });
    }
    return next.handle(request).pipe(
      catchError((error:any) => {
        // Checking if it is an Authentication Error (401)
        console.log(error.status);
        if (error.status === 401) {
          alert('Access Denied');
          // <Log the user out of your application code>
          this._router.navigate([ '/login' ]);
          return throwError(error);
        }
        // If it is not an authentication error, just throw it
        return throwError(error);
      })
    );
  }
}
