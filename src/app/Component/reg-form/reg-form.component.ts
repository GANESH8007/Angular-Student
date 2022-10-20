import { importExpr } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import Student from 'src/app/entity/student';
import { Country, State, City }  from 'country-state-city';
import { ElementRef, VERSION, ViewChild } from '@angular/core';


@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegFormComponent implements OnInit {

  student:Student=new Student();
  students:Student[]=[];
  


  // save(){
  //   const observable=this.userService.saveStud(this.student);
  //   observable.subscribe(
  //     (response: any)=>{
  //       console.log(response);
  //       alert("Record added Successfully! ")
  //     },
  //     function(error){
  //       console.log(error);
  //       alert("Somthing went wrong")
  //     }
  //   )
  // }
  
  
  save(){
    const observable=this.userService.saveStud(this.student);
    observable.subscribe(
      
      (response: any)=>{
        console.log(response);
        alert("Record added Successfully! ")
      },
      function(error){
        console.log(error);
        alert("Somthing went wrong")
      }
    )
  }

    constructor(public userService: UserService) { }
  
    ngOnInit(): void {
      const promise =this.userService.getStudents();
      promise.subscribe((response)=>{
        console.log(response);
        this.students=response as Student[]; 
      })
      }



      @ViewChild('country') country: ElementRef
      @ViewChild('city') city: ElementRef
      @ViewChild('state') state: ElementRef
      name = 'Angular ' + VERSION.major;
      countries = Country.getAllCountries();
      states = null;
      cities = null;
    
      selectedCountry;
      selectedState;
      selectedCity;
      
    
      onCountryChange($event): void {
        this.states = State.getStatesOfCountry(JSON.parse(this.country.nativeElement.value).isoCode);
        this.selectedCountry = JSON.parse(this.country.nativeElement.value);
        this.cities = this.selectedState = this.selectedCity = null;
      }
    
      onStateChange($event): void {
        this.cities = City.getCitiesOfState(JSON.parse(this.country.nativeElement.value).isoCode, JSON.parse(this.state.nativeElement.value).isoCode)
        this.selectedState = JSON.parse(this.state.nativeElement.value);
        this.selectedCity = null;
    
      }
    
      onCityChange($event): void {
        this.selectedCity = JSON.parse(this.city.nativeElement.value)
      }
    
      clear(type: string): void {
        switch(type) {
          case 'country':
            this.selectedCountry = this.country.nativeElement.value = this.states = this.cities = this.selectedState = this.selectedCity = null;
            break;
          case 'state':
            this.selectedState = this.state.nativeElement.value = this.cities = this.selectedCity = null;
            break;
          case 'city':
            this.selectedCity = this.city.nativeElement.value = null;
            break;
        }
      }




}
