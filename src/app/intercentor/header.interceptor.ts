import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
   
    if (request.url.includes('restdb.io')){    
    
      const restdbApiToken = environment.restdbApiKey;
    
      request = request.clone({ 
      headers: request.headers
        .set('x-apikey', restdbApiToken)
      });
    
    }
    return next.handle(request);
  }
}
