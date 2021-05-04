import { Component, OnInit } from '@angular/core';
import { SlotService } from '../services/slot.service';

@Component({
  selector: 'app-slot-check',
  templateUrl: './slot-check.component.html',
  styleUrls: ['./slot-check.component.scss']
})
export class SlotCheckComponent implements OnInit {

  constructor(private slotService: SlotService) { }
  checkedCount: number = 0;
  ngOnInit(): void {
    this.checkSlot();
   
  }
  slotData: any;
  availabledata: any[] = [];
  checkSlot() {

    this.slotService.getSlot('446', '11-05-2021').subscribe((data) => {
      this.checkedCount++;
      console.log(data);
      this.slotData = data;
      this.findAvailableSlot();
    }, (error) => {

    })
  }

  findAvailableSlot() {
    if (this.slotData) {
      this.slotData.centers.forEach((eachHospital: HospitalData) => {
        if (eachHospital.fee_type == "Free") {
          eachHospital.sessions.forEach((eachSession: { available_capacity: number;min_age_limit:number }) => {
            // if (eachSession.vaccine == 'COVISHIELD') {
            //   this.availabledata.push(eachHospital)
            // }
            if (eachSession.available_capacity > 0 && eachSession.min_age_limit==18) {
              this.play();
              this.availabledata.push(eachHospital);
            }
          });
        }

      });
    }
    let self = this;
    setInterval(function () {
      self.checkSlot();
      // your code goes here...
    }, 60 * 1000);

  }
  play() {
    var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
    audio.play();
  }

}

interface HospitalData {
  available_capacity: number
  date: string
  min_age_limit: number
  session_id: string
  slots: any
  sessions: any
  vaccine: string
  fee_type: string
}