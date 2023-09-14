import { Component } from "@angular/core";

@Component({
  selector: "app-bindingwithform",
  templateUrl: "./bindingwithform.component.html",
  styleUrls: ["./bindingwithform.component.scss"],
})
export class BindingwithformComponent {
  // Define properties for two-way binding and property binding
  userInput: string = "";
  dynamicClass: string = "text-success";
  isDisabled: boolean = false;
  showElement: boolean = true;

  // Function to handle form submission
  onSubmit() {
    alert("Form submitted!");
  }
}
