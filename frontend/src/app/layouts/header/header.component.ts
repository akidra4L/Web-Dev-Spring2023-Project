import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { LoginPageComponent } from 'src/app/pages/login-page/login-page.component'; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(public dialog: MatDialog) { }

  openLoginDialog(): void {
    this.dialog.open(LoginPageComponent, {
      width: '500px',
    });    
  }
}
