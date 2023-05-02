import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { masterClasses } from './generator';
import { AuthService } from 'src/app/services/auth.service';
import { ErrorPageComponent } from '../error-page/error-page.component';
import { UserService } from 'src/app/services/user.service';
import { IMasterClass } from 'src/app/models/models';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-master-classes-page',
  templateUrl: './master-classes-page.component.html',
  styleUrls: ['./master-classes-page.component.scss']
})
export class MasterClassesPageComponent implements OnInit {
  masterClasses: IMasterClass[] = masterClasses;
  masterClassesCopy: IMasterClass[] = this.masterClasses;

  constructor(private authService: AuthService, private userService: UserService, public dialog: MatDialog, private searchService: SearchService) { }
  
  ngOnInit(): void {
    this.searchService.searchEvent.subscribe((query: string) => {
      this.masterClasses = this.masterClassesCopy.filter((masterClass: IMasterClass) => 
        masterClass.name.toLowerCase().includes(query.toLowerCase())
      );
    });
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

  getDate(dateStr: string): string {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
  const date = new Date(dateStr);
  const weekday = daysOfWeek[date.getDay()];
  const day = date.getDate();
  const month = monthsOfYear[date.getMonth()];
  const year = date.getFullYear();
  const hours = date.getHours();
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
