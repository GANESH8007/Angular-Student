import { Component } from '@angular/core';
import Student from './entity/student';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  student: Student =new Student();
  students: Student[]=[];
  stud:FormGroup;


  
  modify(stud: Student) {
      this.stud = new FormGroup({
      id: new FormControl(stud.id),
      parentName: new FormControl(stud.parentName),
      studentName: new FormControl(stud.studentName),
      studentRegNo: new FormControl(stud.studentRegNo),
      address: new FormControl(stud.address),
      country: new FormControl(stud.country),
      city: new FormControl(stud.city),
      zipCode: new FormControl(stud.zipCode),
      email: new FormControl(stud.email),
      primContactPerson: new FormControl(stud.primContactPerson),
      primContactPersonMobile: new FormControl(stud.primContactPersonMobile),
      secContactPerson: new FormControl(stud.secContactPerson),
      secContactPersonMobile: new FormControl(stud.secContactPersonMobile),
      applicationStatus: new FormControl(stud.applicationStatus),
    
    });
  }




  title = 'Student';
}
