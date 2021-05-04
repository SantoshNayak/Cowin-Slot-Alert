import { Component, OnInit } from '@angular/core';
import { SlotService } from '../services/slot.service';

@Component({
  selector: 'app-slot-check',
  templateUrl: './slot-check.component.html',
  styleUrls: ['./slot-check.component.scss']
})
export class SlotCheckComponent implements OnInit {

  constructor(private slotService: SlotService) { }

  ngOnInit(): void {
    this.checkSlot();
  }
  slotData: any;
  availabledata: any[] = [];
  checkSlot() {
    this.slotService.getSlot('44', '04-05-2021').subscribe((data) => {
      console.log(data);
      this.slotData = data;
      this.findAvailableSlot();
    }, (error) => {

    })
  }

  findAvailableSlot() {
    if (this.slotData) {
      this.slotData.centers.forEach((eachHospital: HospitalData) => {
        eachHospital.sessions.forEach((eachSession: { vaccine: string; }) => {
          if (eachSession.vaccine == 'COVISHIELD') {
            this.availabledata.push(eachHospital)
          }
          // if(eachSession.available_capacity>0){
          //   this.availabledata.push(eachHospital)
          // }
        });
      });
    }
  }


}

interface HospitalData {
  available_capacity: number
  date: string
  min_age_limit: number
  session_id: string
  slots: any
  sessions:any
  vaccine: string
}