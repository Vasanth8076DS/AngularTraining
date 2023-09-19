import { Component, OnInit } from "@angular/core";
import { MatDialogModule } from "@angular/material/dialog";
import { UserAddEditComponent } from "./user-add-edit/user-add-edit.component";
import { MatDialog } from "@angular/material/dialog";
import { UsersService } from "./services/users.service";
import { CoreService } from "./core/core.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "DemoProject";
  usersData: any;

  constructor(private _dialog: MatDialog, private _userservice: UsersService , private _coreservice :CoreService) {}

  openUserDialog() {
    const dialogRef = this._dialog.open(UserAddEditComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getUserList();
        }
      },
    });
  }
  ngOnInit(): void {
    this.getUserList();
  }

  getUserList() {
    this._userservice.getUsersList().subscribe({
      next: (res) => {
        console.log("List", res);
        this.usersData = res;
      },
      error: console.log,
    });
  }

  deleteUser(id: number) {
    this._userservice.deleteUser(id).subscribe({
      next: (res) => {
        alert("User Deleted Successfully");
        this._coreservice.openSnackBar('User Deleted Successfully','done')
        this.getUserList();
      },
      error: console.log,
    });
  }

  openEditForm(data:any) {
    const dialogRef = this._dialog.open(UserAddEditComponent,{data});
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getUserList();
        }
      },
    });
  }
}
