import { HTTP_INTERCEPTORS, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Data } from '@angular/router';
import { StandardErrorInterceptor } from './standard-error-interceptor';

export class MockErrorInterceptor extends StandardErrorInterceptor {}

describe('StandardErrorInterceptor', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: MockErrorInterceptor,
          multi: true
        }
      ]
    });

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });


  it('Calls an alert message after an http error', () => {

    spyOn(window, 'alert');

    httpClient.get<Data[]>('http://localhost:8080/api/cpumonitorresource').subscribe(
      data => fail('should have failed with the network error'),
      (error: HttpErrorResponse) => {
        expect(window.alert).toHaveBeenCalled();
      }
    );

    const req = httpTestingController.expectOne('http://localhost:8080/api/cpumonitorresource');

    const mockError = new ErrorEvent('Network error');

    req.error(mockError);
  });
});