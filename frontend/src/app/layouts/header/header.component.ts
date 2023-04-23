import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { LoginPageComponent } from 'src/app/pages/login-page/login-page.component'; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLogged: boolean = false;
  username: string = "";
  password: string = "";
  dialogRef!: MatDialogRef<LoginPageComponent>;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.isLogged = true;
    }
  }

  openLoginDialog(): void {
    this.dialogRef = this.dialog.open(LoginPageComponent, {
      width: '500px',
      data: {
        isLogged: this.isLogged,
        username: this.username,
        password: this.password,
      }
    });

    this.dialogRef.componentInstance.loginSuccess.subscribe(data => {
      this.isLogged = data.isLogged;
      this.username = data.username;
      this.password = data.password;
    })
  }
}
