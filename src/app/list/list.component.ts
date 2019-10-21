import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home/home.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  transaction: {}
  checkboxmark
  login: FormGroup;
  item
  checkboxes: any[] = [
    { countryName: "India" },
    { countryName: "Mexico" },
    { countryName: "USA" },
    { countryName: "london" },
    { countryName: "Germany" },
  ]
  data: any[] = [
  ]
  bol: boolean = false;
  name: string;


  groupValue: string[] = []

  newArray = []
  constructor(private formBuilder: FormBuilder, private _HomeService: HomeService) { }

  ngOnInit() {
    this.login = this.formBuilder.group({
      countryName1: ['',],
    })
    this._HomeService.getall().subscribe(res => {
      this.data = res;
      console.log(res);
      this.bol = true;
    },

    );


  }
  changeGroup(event) {
    const group = event.target.value;
    const index = this.groupValue.indexOf(group);

    if (index > -1) {
      this.groupValue.splice(index, 1);
    } else {
      this.groupValue.push(group);
    }

    this.transform(this.data, 'countryName', this.groupValue)

    if (this.groupValue.length == 0) {
      this.transform(this.data, '', this.groupValue)
    }
  }

  transform(items: any[], field: string, value: string[]): any[] {
    console.log(value)
    if (!items) {
      return [];
    }
    if (!field || !value || value.length <= 0) {
      return items;
    }

    this.newArray = items.filter(singleItem => {
      return (singleItem != null && singleItem[field] != null && singleItem[field] != undefined && value.indexOf(singleItem[field]) >= 0);
    });

    return this.newArray
  }

  // GetStats(event: Event) {

  //   console.log(event.currentTarget.value)
  //   this.checkboxmark = event.currentTarget.value
  //   if(this.login.value.countryName1){
  //    this.item = this.data.find((test) => test.countryName) 
  //    console.log(this.item)
  // //    this.data= {event.currentTarget.value};
  // // if (this.item.find((test) => test.name === event.currentTarget.value) === undefined) {
  // //   this.item.push(item);
  // // }
  //   }
  // else{

  //   this.data.push(event.currentTarget.value)
  // }
  // console.log("data value",this.data)

  //   }



  //   // this._HomeService.getall().subscribe( res => {
  //   //         this.transaction = res;
  //   //         console.log(this.transaction);
  //   //         }, 

  //   //         );

  // //   if(this.login.value.countryName){
  // //     this.count = this.count + 1
  // //     this.valuecountry = event.target.value

  // //   }


  // //  console.log( event.target.value, this.valuecountry[0]);
  // //   if(this.count == 1 && this.valuecountry[0] == event.target.value[0]){
  // //     this.two = event.target.value
  // //     this._HomeService.countrylist1(this.two).subscribe( res => {
  // //       this.transaction = res;
  // //       console.log(this.transaction);
  // //       }, 

  // //       );
  // //   }
  // //   else if (this.count == 2 && this.valuecountry[1] == event.target.value) {
  // //     this.three = event.target.value
  // //     this._HomeService.countrylist2(this.two,this.three).subscribe( res => {
  // //   this.transaction = res;
  // //   console.log(this.transaction);
  // //   }, 

  // //   );
  // //   } 
  // //   else if (this.count == 3) {
  // //     this.four = event.target.value
  // //     this._HomeService.countrylist3(this.two,this.three,this.four).subscribe( res => {
  // //   this.transaction = res;
  // //   console.log(this.transaction);
  // //   }, 

  // //   );
  // //   } 

  // //   else if (this.count == 4) {
  // //     this.five = event.target.value
  // //     this._HomeService.countrylist4(this.two,this.three, this.four, this.four).subscribe( res => {
  // //   this.transaction = res;
  // //   console.log(this.transaction);
  // //   }, 

  // //   );
  // //   } 
  // //   else if (this.count == 5){
  // //     this._HomeService.getall().subscribe( res => {
  // //       this.transaction = res;
  // //       console.log(this.transaction);
  // //       }, 

  // //       );
  // //   }
  // // }


}
