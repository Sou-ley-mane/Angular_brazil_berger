import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthinterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //Récupération du token
    const letoken=localStorage.getItem('token');
        //On clone la requête en y ajoutant un headers Authorization avec la chaine de caractères Bearer suivie du token
        request=request.clone({
          setHeaders: {
            'Authorization': `Bearer ${letoken}`
          },
        })

    return next.handle(request);
  }
}
