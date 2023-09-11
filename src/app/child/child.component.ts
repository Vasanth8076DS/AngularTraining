import { Component, EventEmitter, Input, Output } from "@angular/core";
import { MyObject } from "./object.interface";
@Component({

  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.scss"],
})
export class ChildComponent {
  @Input() childMessage!: string;
  @Input() objProps!: MyObject[];
  @Output() MessageFromChild = new EventEmitter<string>();
  Message: string = 'Message';
  constructor(){}
  

  sendMessage(message:string){
    this.MessageFromChild.emit(message);  
    this.Message
  }
    
}
