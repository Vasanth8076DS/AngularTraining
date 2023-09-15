import { Component } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";

interface IUser {
  name: string;
  nickname: string;
  email: string;
  password: string;
  showPassword: boolean;
}

@Component({
  selector: "app-filters-validators",
  templateUrl: "./filters-validators.component.html",
  styleUrls: ["./filters-validators.component.scss"],
})
export class FiltersValidatorsComponent {
  reactiveForm!: FormGroup;
  user: IUser;

  constructor() {
    this.user = {} as IUser;
  }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      name: new FormControl(this.user.name, [
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(1),
      ]),
      nickname: new FormControl(this.user.nickname, [Validators.maxLength(7)]),
      email: new FormControl(this.user.email, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(250),
      ]),
      password: new FormControl(this.user.password, [
        Validators.required,
        Validators.minLength(15),
      ]),
    });
  }

  get name() {
    return this.reactiveForm.get("name")!;
  }

  get nickname() {
    return this.reactiveForm.get("nickname")!;
  }

  get email() {
    return this.reactiveForm.get("email")!;
  }

  get password() {
    return this.reactiveForm.get("password")!;
  }

  public validate(): void {
    if (this.reactiveForm.invalid) {
      for (const control of Object.keys(this.reactiveForm.controls)) {
        this.reactiveForm.controls[control].markAsTouched();
      }
      return;
    }

    this.user = this.reactiveForm.value;

    console.info("Name:", this.user.name);
    console.info("Nickname:", this.user.nickname);
    console.info("Email:", this.user.email);
    console.info("Password:", this.user.password);
  }
}
