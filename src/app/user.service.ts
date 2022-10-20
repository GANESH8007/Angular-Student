import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import student from './entity/student';

const BASE_URL="http://localhost:8081"
const STAFF_URL="http://localhost:8080"
@Injectable({
  providedIn: 'root'
})
export class UserService {

    getStudents(){
      return this.http.get(BASE_URL+"/getallStudent")
    }

    getCirculars(){
      return this.http.get(STAFF_URL+"/getAllCircular")
    }

    getStudentById(student:any){
      return this.http.get(BASE_URL+"/getStudentById",student.id)
    }
      
    deleteUser(student:any)
    {
      return this.http.delete(BASE_URL+"/DeleteStudentById/"+student.id)
    }

    updateStudent(student, id) {
      return this.http.put(BASE_URL+"/updateStudentById/"+id,student)
    }

    updateCircular
    (circular, id) {
      return this.http.put(STAFF_URL+"/updateCircularById/"+id,circular)
    }

    saveStud(student:{

      parentName:string;
      studentName:string;
      studentRegNo:string;
      address:string;
      state:string;
      country:string;
      city:string;
      zipCode:string;
      email:string;
      primContactPerson:string;
	    primContactPersonMobile:string;
	    secContactPerson:string;
	    secContactPersonMobile:string;
	    applicationStatus:string;
    }){
      return this.http.post(BASE_URL+"/AddStudent",student);
    }


    
    saveCircu(circular:{

      subject:string;
      discription:string;
      date:string;
      acknowledge:string;
      
    }){
      return this.http.post(STAFF_URL+"/AddCircualr",circular);
    }

  constructor(public http :HttpClient) { }

}
