import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs/internal/observable/interval';
import { SlotService } from '../services/slot.service';
// import { interval } from 'rxjs/observable/interval';

@Component({
  selector: 'app-slot-check',
  templateUrl: './slot-check.component.html',
  styleUrls: ['./slot-check.component.scss']
})
export class SlotCheckComponent implements OnInit {

  constructor(private slotService: SlotService) { }
  checkedCount: number = 0;
  selectedState: any;
  allStates: any;
  allCities: any;
  selectedCity: any
  isLoading: boolean = false;

  autoClick:boolean=false;
  ngOnInit(): void {
    let self=this;
    // this.checkSlot();
    this.getStates();
    setInterval(function(){ 
      if(self.autoClick){
        self.checkSlot();
      }
      // $("#myBtn").click();
   },2000);

  }
  slotData: any;
  availabledata: any[] = [];
  checkSlot() {
    this.isLoading=true;
    this.autoClick=true;
    this.slotService.getSlot(this.selectedCity.district_id, '11-05-2021').subscribe((data) => {
      this.checkedCount++;
      console.log(data);
      this.slotData = data;
      this.isLoading=false;
      this.findAvailableSlot();
    }, (error) => {

    })

 
  }

  findAvailableSlot() {
    if (this.slotData) {
      this.slotData.centers.forEach((eachHospital: HospitalData) => {
        if (eachHospital.fee_type == "Free") {
          eachHospital.sessions.forEach((eachSession: { available_capacity: number; min_age_limit: number }) => {

            if (eachSession.available_capacity > 0 && eachSession.min_age_limit == 18) {
              this.play();
              this.availabledata.push(eachHospital);
              console.log('found a center')
            }
          });
        }

      });
    }
    // let self = this;
    // setInterval(function () {
    //   self.checkSlot();
    //   // your code goes here...
    // }, 60 * 1000);
    interval(30000).subscribe(() => {
      console.log('interval ');
      this.checkSlot();
    }) // do something)
  }
  play() {
    var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
    audio.play();
  }



  getStates() {
    this.slotService.getStates().subscribe(data => {
      this.allStates = data.states;
    }, error => {
      console.log(error);

    })
  }
  onStateSelect() {
    console.log('on', this.selectedState);
    this.slotService.getCities(this.selectedState.state_id).subscribe(data => {

      this.allCities = data.districts
    }, error => {
      console.log(error);

    })

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