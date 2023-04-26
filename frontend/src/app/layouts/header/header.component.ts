import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { LoginPageComponent } from 'src/app/pages/login-page/login-page.component'; 
import { SignupPageComponent } from 'src/app/pages/signup-page/signup-page.component';
import { SearchService } from 'src/app/services/search.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLogged: boolean = false;
  username: string = "";
  password: string = "";
  
  searchQuery: string = "";

  dialogRef!: MatDialogRef<LoginPageComponent>;
  dialogSignUp!: MatDialogRef<SignupPageComponent>;

  constructor(public dialog: MatDialog, private userService: UserService, private searchService: SearchService) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.isLogged = true;
    }
  };

  onSearchInput(): void {    
    this.searchService.search(this.searchQuery);
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
      this.userService.username = data.username;
    });
  };

  openSignUpDialog(): void {
    this.dialogSignUp = this.dialog.open(SignupPageComponent, {
      width: '500px',
    });
  }

  handleLogout(): void {
    localStorage.removeItem('token');
    this.isLogged = false;
    this.userService.username = '';
  };
}
