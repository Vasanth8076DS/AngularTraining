import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UserInterface } from "./types/userInterface";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "DemoProject";

  users: UserInterface[] = [];

  constructor(private http: HttpClient) {}

  
  ngOnInit(): void {
    console.log("ngOnInit");
    this.http.get<UserInterface[]>('http://localhost:3000/users').subscribe((users) => {
      console.log('res', users)
      this.users = users;
    });
  }
}
