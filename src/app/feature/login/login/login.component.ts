import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private readonly router: Router,
  ) { }

  ngOnInit(): void {
  }

  public redirectUsers(): void {
    this.router.navigateByUrl('/products/list');
  }

  login(){
    window.localStorage.setItem("logueo", "true");
    this.redirectUsers();
  }

}
