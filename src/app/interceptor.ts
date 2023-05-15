import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class Interceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = request.clone({
        headers: request.headers.set('x-api-key', 'PMAK-642aa7c5647d041389f2d3b3-456d9e9415ef72648779803ab3772c0070')
      });
    return next.handle(authReq);
  }
}