import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpService } from './http.service';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class SlotService {

  constructor(private http:HttpService) { }

  getSlot(distID:any,date:any): Observable<any> {
    
    return this.http.get('appointment/sessions/calendarByDistrict?district_id='+distID+'&date='+date).pipe(
      map(response => {
        return response;
      })
    )
  }
}
