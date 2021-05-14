import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
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
  autoClick: boolean = false;
  categories: any[] = [{ name: '18+', key: '18' }, { name: '45+', key: '45' },
  ];
  startDate:string ='';
  selectedAgeGroup: any;
  cols = [
    { field: 'name', header: 'Name' },
    { field: 'address', header: 'Address' },
    { field: 'block_name', header: 'Block Name' },
    { field: 'available_capacity', header: 'Capacity' },
    // { field: 'fee_type', header: 'Fee' },
];

  ngOnInit(): void {
    this.startDate=moment(new Date()).format("DD-MM-YYYY")
    let self = this;
    // this.checkSlot();
    this.getStates();
    interval(30000).subscribe(() => {
      console.log('interval ');
      if (this.autoClick) {
        this.checkSlot();
      }
    })

  }
  slotData: any;
  availabledata: any[] = [];
  checkSlot() {
    this.isLoading = true;
    this.autoClick = true;
    this.slotService.getSlot(this.selectedCity.district_id, this.startDate).subscribe((data) => {
      this.checkedCount++;
      console.log(data);
      this.slotData = data;
      this.isLoading = false;
      this.availabledata=[]
      this.findAvailableSlot();
    }, (error) => {

    })


  }

  findAvailableSlot() {
    if (this.slotData) {
      this.slotData.centers.forEach((eachHospital: HospitalData) => {
        if (eachHospital.fee_type == "Free") {
          eachHospital.sessions.forEach((eachSession: { available_capacity: number; min_age_limit: number }) => {

            if (eachSession.available_capacity > 0 && eachSession.min_age_limit == this.selectedAgeGroup.key) {
              this.play();
              this.availabledata.push(eachHospital);
              console.log('found a center');
              this.autoClick=false;
              //Get availability count
              if(eachHospital.available_capacity){
                eachHospital["available_capacity"]=eachHospital.available_capacity+eachSession.available_capacity;
              }else{
                eachHospital["available_capacity"]=eachSession.available_capacity;

              }
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
    // do something)
  }
  play() {
    var audio = new Audio('https://s3.amazonaws.com/kare4u.provider.images/others/Buzzer-sound.mp3');
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