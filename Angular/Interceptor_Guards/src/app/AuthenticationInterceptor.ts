import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
  router: any;
  intercept(
    request: HttpRequest<any>, next: HttpHandler
  ) : Observable<HttpEvent<any>> {
    const token = localStorage.getItem('mytoken');
   
    if (token) {
      request = request.clone({
          headers: request.headers.set(
            'Authorization',
            token
          )
      });
    }
    return next.handle(request).pipe(
      catchError((error: { status: number; }) => {
        // Checking if it is an Authentication Error (401)
        if (error.status === 401) {
          alert('Access Denied');
          // <Log the user out of your application code>
          this.router.navigate([ 'login-page-route' ]);
          return throwError(error);
        }
        // If it is not an authentication error, just throw it
        return throwError(error);
      })
    );;


  }
}

function throwError(error: { status: number; }) {
  throw new Error('Function not implemented.');
}
function catchError(arg0: (error: { status: number; }) => void): import("rxjs").OperatorFunction<HttpEvent<any>, HttpEvent<any>> {
  throw new Error('Function not implemented.');
}

