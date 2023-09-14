import { Component } from "@angular/core";
import { UserService } from "../user.service";

@Component({
  selector: "app-userlist",
  templateUrl: "./userlist.component.html",
  styleUrls: ["./userlist.component.scss"],
})
export class UserlistComponent {
  public userList!: any[];

  constructor(private _userData: UserService) {}

  ngOnInit() {

    this.userList = this._userData.getUsers();
  }
}
