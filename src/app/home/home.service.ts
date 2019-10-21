import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HomeComponent } from '../home/home.component';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  _url = 'http://192.168.96.222:8080/country'
  _urls = 'http://192.168.96.222:8080/fetch/alldata'
  constructor(private http: HttpClient) { }

  registeration(reg: HomeComponent) {
    return this.http.post<any>(this._url, reg);
  }

 
  countrylist1(acno: String) {
    console.log(acno)

    // return this.http.get("http://192.168.96.222:8080/fetch?countryName="+`${acno}`+"");
    return this.http.get(`http://192.168.96.222:8080/fetch?countryName=${acno}`)
  }
  countrylist2(acno: String, acno1: String) {

    return this.http.get(`http://192.168.96.222:8080/fetch/two?countryName=${acno}&countryName1=${acno1}`)
  }

  countrylist3(acno: String, acno1: String,acno2: String) {

    return this.http.get(`http://192.168.96.222:8080/fetch/three?countryName=${acno}&countryName1=${acno1}&countryName2=${acno2}`)
  }

  countrylist4(acno: String, acno1: String,acno2: String,acno3: String) {

    return this.http.get(`http://192.168.96.222:8080/fetch/four?countryName=${acno}&countryName1=${acno1}&countryName2=${acno2}&countryName3=${acno3}`)
  }
  getall() {


    // return this.http.get("http://192.168.96.222:8080/fetch?countryName="+`${acno}`+"");
    return this.http.get<any>(this._urls)
  }

}

