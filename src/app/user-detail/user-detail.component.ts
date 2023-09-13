import { Component } from "@angular/core";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";

@Component({
  selector: "app-user-detail",
  template: `<h1>{{ userId }}</h1>
    <p>
      <button (click)="showProfile()" class="custom-button">Profile</button>
      <button (click)="showOverView()" class="custom-button">OverView</button>
    </p>
    <router-outlet></router-outlet>
    <button (click)="goPrev()">Prev</button>

    <button (click)="goNext()">Next</button>
    <div>
      <button (click)="gotoUser()">Back</button>
    </div>`,
  styleUrls: ["./user-detail.component.scss"],
})
export class UserDetailComponent {
  public userId: any;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // let id = this.route.snapshot.paramMap.get("id");
    // this.userId = id;

    this.route.paramMap.subscribe((params: ParamMap) => {
      let Id = params.get("id");
      this.userId = Id;
    });
  }

  goPrev() {
    let prevId = parseInt(this.userId.toString()) - 1;
    this.router.navigate(["/user", prevId]);
  }

  goNext() {
    let nextId = parseInt(this.userId.toString()) + 1;
    this.router.navigate(["/user", nextId]);
  }
  gotoUser() {
    let selectedId = this.userId ? this.userId : null;
    this.router.navigate(["/user", { id: selectedId }]);
  }

  showProfile() {
    this.router.navigate(["profile"], { relativeTo: this.route });
  }
  showOverView() {
    this.router.navigate(["overview"], { relativeTo: this.route });
  }
}
