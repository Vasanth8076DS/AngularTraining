import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-userlist",
  template: `<h3>USER LIST</h3>
    <ul>
      <li (click)="onSelect(user)" *ngFor="let user of UserList">
        <span class="user-id">{{ user.id }}</span>
        <span class="user-name">{{ user.name }}</span>
      </li>
    </ul>`,
  styleUrls: ["./userlist.component.scss"],
})
export class UserlistComponent {
  UserList = [
    { id: 1, name: "USER 1" },
    { id: 2, name: "USER 2" },
    { id: 3, name: "USER 3" },
    {id: 4, name: "USER 4"}
  ];
  constructor(private router: Router ) {}
  ngOnInit() {}
  onSelect(user: { id: number; }){

    this.router.navigate(['/user',user.id ])

  }
}
