import { Component, OnInit } from '@angular/core';
import Circular from 'src/app/entity/circular';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-view-circular',
  templateUrl: './view-circular.component.html',
  styleUrls: ['./view-circular.component.css']
})
export class ViewCircularComponent implements OnInit {

  circular: Circular = new Circular();
  circulars: Circular[] = [];
  id: number = 0;
  searchText: string;

  constructor(public userService: UserService) { }


  ngOnInit(): void {
    const promise = this.userService.getCirculars();
    promise.subscribe((response) => {
      console.log(response);
      this.circulars = response as Circular[];
    })
  }

  
  update(circular){
    console.log(circular);
    const observable = this.userService.updateCircular(this.circular, this.id) 
    observable.subscribe((response:any) => {
      console.log(response);
      alert("Acknowledged Successfully!")
    },
      function(error) {
        console.log(error);
        alert("something went wrong please check!")
      }
    )
  }

  updateCircular(st,j) {
  
    this.id = st.id;
    this.circular.subject = st.subject
    this.circular.date = st.date
    this.circular.discription = st.discription
    this.circular.acknowledge = st.acknowledge
     
  }
}
