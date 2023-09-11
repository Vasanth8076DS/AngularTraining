import { Component, OnInit } from "@angular/core";
import { MyObject } from "../child/object.interface";
@Component({
  selector: "app-parent",
  templateUrl: "./parent.component.html",
  styleUrls: ["./parent.component.scss"],
})
export class ParentComponent {
  parentMessage: string = '';

  objParent: MyObject[] = [
    { id: 1, name: "anand" },
    { id: 2, name: "ManiKandan" },
    { id: 3, name: "Vasanth" },
  ];

  handleMessageFromChild (
    message:string
  ){
    this.parentMessage = message;
    
  }
}
