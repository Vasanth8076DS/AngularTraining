import { Component, ViewChild, ElementRef, Input } from "@angular/core";

@Component({
  selector: "app-templates",
  templateUrl: "./templates.component.html",
  styleUrls: ["./templates.component.scss"],
})
export class TemplatesComponent {
  @Input() childData: any;


  title = "Templates";
  appName = "My Angular App";
  name = "";
  items = ["Item 1", "Item 2", "Item 3"];
  imageUrl: string = "assets/images.jpeg";
  updateMessage() {
    this.title = "Message updated on button click!";
  }
  customData: string = "custom-value"; // Set your custom data
  isError: boolean = true; // Set the condition for error class
  textColor: string = "red";

  // ViewChild to access the template reference variable
  @ViewChild("nameInput", { static: false })
  nameInputRef!: ElementRef;

  // Function to set the name based on the input value
  setName(inputValue: string) {
    // Access the input element using the template reference variable
    const inputElement: HTMLInputElement = this.nameInputRef.nativeElement;
    console.log("inputElement", inputValue);
const item = inputValue;
this.childData(item)
    // Set the input element's value
    inputElement.value = inputValue;
  }
}
