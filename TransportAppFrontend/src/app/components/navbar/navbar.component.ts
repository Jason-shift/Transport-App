import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public loggedIn = false;
  public userName: string | null | undefined

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.loggedIn = this.loginService.isLoggedIn();
    this.userName = localStorage.getItem("userName")
  }

  logoutUser() {
    this.loginService.logoutUser();
    location.reload();
  }

}
