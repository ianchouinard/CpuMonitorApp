import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class StandardErrorInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(tap(event => ({}), error => this.handle(error)), finalize(() => {}));
  }

  private handle(error: HttpEvent<any>): void {
    if (error instanceof HttpErrorResponse) {
      alert('An error happened. Please try again later.')
    }
  }
}