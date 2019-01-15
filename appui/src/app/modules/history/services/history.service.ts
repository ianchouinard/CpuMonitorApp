import { Injectable } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class HistoryService {

  constructor(private http: HttpClient) { }

  public getRecordStats(): Observable<any> {
    return this.http
      .get(`${environment.apiUrl}/history/record-stats`)
      .pipe(map(res => res));
  }
}
