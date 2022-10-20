import { Component, OnInit } from '@angular/core';
import { importExpr } from '@angular/compiler/src/output/output_ast';
import { UserService } from 'src/app/user.service';
import Circular from 'src/app/entity/circular';

@Component({
  selector: 'app-create-circular',
  templateUrl: './create-circular.component.html',
  styleUrls: ['./create-circular.component.css']
})
export class CreateCircularComponent implements OnInit {

  circular: Circular = new Circular();
  circulars: Circular[] = [];

  save() {
    const observable = this.userService.saveCircu(this.circular);
    observable.subscribe(
      (response: any) => {
        console.log(response);
        alert("Circular added Successfully! ")
      },
      function (error) {
        console.log(error);
        alert("Somthing went wrong")
      }
    )
  }

  constructor(public userService: UserService) {
   }

  
  ngOnInit(): void {
    const promise = this.userService.getCirculars();
    promise.subscribe((response) => {
      console.log(response);
      this.circulars = response as Circular[];
    })
  }
}
