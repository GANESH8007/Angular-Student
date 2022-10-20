import { Component, OnInit } from '@angular/core';
import Student from 'src/app/entity/student';
import { UserService } from 'src/app/user.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-approve-application',
  templateUrl: './approve-application.component.html',
  styleUrls: ['./approve-application.component.css']
})
export class ApproveApplicationComponent implements OnInit {

  student: Student =new Student();
  students: Student[]=[];
  stud:FormGroup;
  id:number = 0;


  constructor(public userService: UserService) { }

  ngOnInit(): void {
    const promise =this.userService.getStudents();
    promise.subscribe((response)=>{
      console.log(response);
      this.students=response as Student[]; 
    })
    }

  update(student){
    console.log(student);
    const observable = this.userService.updateStudent(this.student, this.id) 
    observable.subscribe((response:any) => {
      console.log(response);
      alert("Application Status Updated Successfully!")
    },
      function(error) {
        console.log(error);
        alert("something went wrong please check!")
      }
    )
  }



  updatestudent(st,j) {
  
    this.id = st.id;
    this.student.parentName = st.parentName;
    this.student.studentName = st.studentName;
    this.student.studentRegNo = st.studentRegNo;
    this.student.address = st.address;
    this.student.state = st.state;
    this.student.country = st.country;
    this.student.city = st.city;
    this.student.zipCode = st.zipCode;
    this.student.email = st.email;
    this.student.primContactPerson = st.primContactPerson;
    this.student.primContactPersonMobile = st.primContactPersonMobile;
    this.student.secContactPerson = st.secContactPerson;
    this.student.secContactPersonMobile = st.secContactPersonMobile;
    this.student.applicationStatus = st.applicationStatus;
     
  }



}
