import { Component, Input } from "@angular/core";
import { UserInterface } from "../types/userInterface";
import { MatTableModule } from "@angular/material/table";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"],
})
export class FormComponent {
  @Input() users: UserInterface[] = [];


  showCountryColumn = false;

  displayedColumns: string[] = ["Id", "Name", "Country", "Password"];
  dataSource = this.users;
  toggleCountryColumn() {
    this.showCountryColumn = !this.showCountryColumn;
  }

  getCountryClass(country: string): string {
    switch (country.toLowerCase()) {
      case 'india':
        console.log('Country is India');
        return 'india';
      case 'usa':
        console.log('Country is USA');
        return 'usa';
      case 'australia':
        console.log('Country is Australia');
        return 'australia';
      case 'england':
        console.log('Country is England');
        return 'england';
      default:
        console.log('Country is Default');
        return 'default';
    }
  }
  

  ngOnInit():void{
    console.log("thioetheriohjetrio",this.users)
  }
}
