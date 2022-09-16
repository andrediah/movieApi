import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpParams
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ParameterInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (req.url.includes('api.themoviedb.org')){

    
      const tmdbApiKey = environment.moviedbApiKey;
      req = req.clone({
        params: (req.params ? req.params : new HttpParams())
                  .set('language', 'en-US') /*.... add new params here .....*/ 
                  .set('api_key',tmdbApiKey)
      });
  }
   
    return next.handle(req);
  }
}
