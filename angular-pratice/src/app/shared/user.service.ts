import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http :HttpClient) { }

  public getUserList() {
    let url = 'https://jsonplaceholder.typicode.com/todos'
    return this.http.get(url)
  }
  public firstTenUsers()  {
    let url="https://jsonplaceholder.typicode.com/users";
    return this.http.get(url);
  }

  getUserById(id:string) {
    let url=`https://jsonplaceholder.typicode.com/users/${id}`;
    return this.http.get(url);
  }
}
