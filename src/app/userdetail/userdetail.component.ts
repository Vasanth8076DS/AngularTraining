import { Component } from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.scss']
})
export class UserdetailComponent {

  public UserDetail !: any[];

  constructor(private _userData:UserService){};

  ngOnInit (){
    this.UserDetail = this._userData.getUsers();
  };

}
