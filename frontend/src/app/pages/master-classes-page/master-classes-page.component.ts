import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { masterClasses } from './generator';
import { AuthService } from 'src/app/services/auth.service';
import { ErrorPageComponent } from '../error-page/error-page.component';
import { UserService } from 'src/app/services/user.service';
import { IMasterClass } from 'src/app/models/models';

@Component({
  selector: 'app-master-classes-page',
  templateUrl: './master-classes-page.component.html',
  styleUrls: ['./master-classes-page.component.scss']
})
export class MasterClassesPageComponent {
  masterClasses: IMasterClass[];

  constructor(private authService: AuthService, private userService: UserService, public dialog: MatDialog) { 
    this.masterClasses = masterClasses;
  }

  getUserList(names: string[]): string {
    const MAX_NAMES = 3;
    let result = "";

    for (let i = 0; i < names.length && i < MAX_NAMES; i++) {
      result += names[i] + ", ";
    }

    names.length > MAX_NAMES ? result += "..." : result = result.slice(0, -2);
    return result;
  }

  getDate(date: Date): string {
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const weekday = weekdays[date.getDay()];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    return `${weekday}, ${day} ${month} ${year} ${hours}:${minutes}`;
  }

  onRegisterClick(id: number): void {
    if (this.authService.isLoggedIn()) {
      this.masterClasses.map((item: IMasterClass) => {
        if (item.id === id) {
          const newList = [this.userService.username].concat(item.attendees);
          item.attendees = newList;
          return;
        }
      });
      return;
    }
    this.dialog.open(ErrorPageComponent, {
      width: '300px',
    });
    return;
  }
}
