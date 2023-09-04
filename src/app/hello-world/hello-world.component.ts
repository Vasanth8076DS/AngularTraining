import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss'],
})
export class HelloWorldComponent {
  message: any = "Checking both Event and Property Binding";
  message11: String = "2 way binding works!!";
  disableBtn: boolean = false;
  updateMessage() {
    this.message = 'Message updated on button click!';
    this.disableBtn = true;
  }
}
