import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers(){
    return [
      { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
      { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
      { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "User" },
      { id: 4, name: "Alice Brown", email: "alice@example.com", role: "Admin" },
      { id: 5, name: "Ella Davis", email: "ella@example.com", role: "User" },
      {
        id: 6,
        name: "Michael Clark",
        email: "michael@example.com",
        role: "User",
      },
      { id: 7, name: "Sophia Wilson", email: "sophia@example.com", role: "User" },
      { id: 8, name: "William Lee", email: "william@example.com", role: "Admin" },
      { id: 9, name: "Olivia White", email: "olivia@example.com", role: "User" },
      { id: 10, name: "James Harris", email: "james@example.com", role: "User" },
    ];
  }
}
