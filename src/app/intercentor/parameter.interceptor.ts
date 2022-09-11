import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpParams
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ParameterInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const newReq = req.clone({
      params: (req.params ? req.params : new HttpParams())
                 .set('language', 'en-US') /*.... add new params here .....*/ 
                 .set('api_key','de187e9e947efda08964dd2e964361d5')
    });
    return next.handle(newReq);
  }
}
