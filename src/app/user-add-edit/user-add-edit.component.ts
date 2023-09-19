import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { UsersService } from "../services/users.service";
import { DialogRef } from "@angular/cdk/dialog";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from "@angular/material/dialog";
import { CoreService } from "../core/core.service";

// Define the interface inside your component file
interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  dob: string;
  gender: string;
  education: string;
  company: string;
  experiance: string;
  package: string;
}

@Component({
  selector: "app-user-add-edit",
  templateUrl: "./user-add-edit.component.html",
  styleUrls: ["./user-add-edit.component.scss"],
})
export class UserAddEditComponent implements OnInit {
  userForm: FormGroup;

  education: string[] = [
    "Matric",
    "Diploma",
    "Intermediate",
    "Graduate",
    "Post Graduate",
  ];

  selectedCountry: string = "";

  constructor(
    private _fb: FormBuilder,
    private _userservice: UsersService,
    private _dialogRef: MatDialogRef<UserAddEditComponent>,
    private _coreservice: CoreService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    // Initialize the form group with UserData interface
    this.userForm = this._fb.group({
      firstName: "",
      lastName: "",
      email: "",
      dob: "",
      gender: "",
      education: this.selectedCountry,
      company: "",
      experiance: "",
      package: "",
    });
  }

  ngOnInit(): void {
    this.userForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.userForm.valid) {
      if (this.data) {
        this._userservice
          .updateUser(this.data.id, this.userForm.value)
          .subscribe({
            next: (val: any) => {
              this._coreservice.openSnackBar(
                "User Updated Successfully",
                "done"
              );
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.log(err);
            },
          });
      } else {
        this._userservice.addUser(this.userForm.value).subscribe({
          next: (val: any) => {
            this._coreservice.openSnackBar("User Added Successfully", "done");
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.log(err);
          },
        });
      }
      console.log("Form VAlues", this.userForm.value);
    }
  }
}
