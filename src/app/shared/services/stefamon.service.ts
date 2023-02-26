import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { SharedModule } from '../shared.module';

@Injectable({
  providedIn: SharedModule
})
export class StefamonService {

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<any> {
    return this.http.get(`${environment.urlBackend}/stefamon`);
  }

}
