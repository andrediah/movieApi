import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
   
    if (request.url.includes('restdb.io')){    
    
      const restdbApiToken = '631f8ec0fdc15b0265f17346';
    
      request = request.clone({ 
      headers: request.headers
        .set('x-apikey', restdbApiToken)
      });
    
    }
    return next.handle(request);
  }
}
