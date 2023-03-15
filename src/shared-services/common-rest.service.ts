import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
const httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

@Injectable({
  providedIn: 'root'
})
export class CommonRestService {

  constructor(private httpClient: HttpClient) { }

  public getMethod(url: string): Observable<any> {
    return this.httpClient.get(url);
  }

  public postMethod(url: any, requestBody: any): Observable<any> {
    return this.httpClient.post(url, requestBody).pipe();
  }


}
