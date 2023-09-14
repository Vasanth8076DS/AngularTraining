import { Component } from "@angular/core";

@Component({
  selector: "app-directives",
  templateUrl: "./directives.component.html",
  styleUrls: ["./directives.component.scss"],
})
export class DirectivesComponent {
  isVisible = true;
  items = ["Item 1", "Item 2", "Item 3"];
  isRed = true;
  isHighlighted = true;
  isItalic = false;
  name = "";
  color = "red";
  classObject = { highlight: this.isHighlighted, italic: this.isItalic };
  styleObject = { color: this.isRed ? "red" : "blue" };

  doSomething() {
    alert("Button clicked!");
  }

  submitForm() {
    console.log("Form submitted.");
    console.log("name",this.name);
  }
}
