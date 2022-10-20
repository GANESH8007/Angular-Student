import { Component, OnInit } from '@angular/core';
import Student from 'src/app/entity/student';
import { UserService } from 'src/app/user.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {

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
      
  
    // modify(stud: Student) {
    //   this.stud = new FormGroup({
    //     id: new FormControl(stud.id),
    //     firstName: new FormControl(stud.firstName),
    //     lastName: new FormControl(stud.lastName),
    //     dob: new FormControl(stud.dob),
    //     email: new FormControl(stud.email),
    //     phoneNumber: new FormControl(stud.phoneNumber),
    //     studClass: new FormControl(stud.studClass),
    //     division: new FormControl(stud.division),
    //     rollNo: new FormControl(stud.rollNo)
    //   });
    // }

    cancel() {
      this.stud = null;
    }

    // save() {
    //   let index = this.students.findIndex(stud => stud.id === this.stud.value.id);
    //   this.stud[index] = this.stud.value;
      
    // }

    // savebyid(stud,id){
    //   let index = this.students.findIndex(stud => stud.id === this.stud.value.id);
    //    this.stud[index] = this.stud.value;
    //    const observable =this.userService.modifyUser(stud,id);
    //    observable.subscribe((response:any)=>{
    //      console.log(response);
    //      this.students.splice(index,1)
    //     })
    // }

    update(student){
      console.log(student);
      const observable = this.userService.updateStudent(this.student, this.id) 
      observable.subscribe((response:any) => {
        console.log(response);
        alert("Update Successfully!")
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


    deleteRow(student, index){
      const observable =this.userService.deleteUser(student);
      observable.subscribe((response:any)=>{
        console.log(response);
        this.students.splice(index,1)
      })
       }
       
        //  getdatabyid(student:any, index:any){
        //   const promise =this.userService.getStudentById(student);
        //   promise.subscribe((response)=>{
        //     console.log(response);
        //     this.students=response as Student[]; 
        //   })
        //   }
    

}
