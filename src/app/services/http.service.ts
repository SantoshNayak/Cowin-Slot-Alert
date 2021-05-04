import { environment } from './../../environments/environment';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
// import {AppConstants} from '../utils/app.constants';
import {Observable} from 'rxjs';
// import {StorageService} from './localStorage.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  httpOptions: any = {headers: new HttpHeaders({Authorization: ''})};
  BASEURL =  environment.apiUrl;

  constructor(private http: HttpClient) {
    // const token = storage.getItem(AppConstants.TOKEN);
    // if (token != null) {
    //   this.httpOptions = {
    //     headers: new HttpHeaders({Authorization: 'Bearer ' + token})
    //   };
    // }
  }

  get(url: string): Observable<any> {
    return this.http.get<any>(this.BASEURL + url, this.httpOptions);
  }

  post(url: string, model: any): Observable<any> {
    return this.http.post<any>(this.BASEURL + url, model, this.httpOptions);
  }

  put(url: string, model: any): Observable<any> {
    return this.http.put<any>(this.BASEURL + url, model, this.httpOptions);
  }

  delete(url:string): Observable<any> {
    return this.http.delete<any>(this.BASEURL + url, this.httpOptions);
  }


  
}
