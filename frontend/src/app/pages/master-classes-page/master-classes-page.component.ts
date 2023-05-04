import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { AuthService } from 'src/app/services/auth.service';
import { ErrorPageComponent } from '../error-page/error-page.component';

import { IMasterClass } from 'src/app/models/models';
import { SearchService } from 'src/app/services/search.service';
import { MasterclassService } from 'src/app/services/masterclass.service';

@Component({
  selector: 'app-master-classes-page',
  templateUrl: './master-classes-page.component.html',
  styleUrls: ['./master-classes-page.component.scss']
})
export class MasterClassesPageComponent implements OnInit {
  masterClasses: any[] = [];
  masterClassesCopy: any[] = this.masterClasses;

  constructor(private authService: AuthService, public dialog: MatDialog, private searchService: SearchService, private masterClassService: MasterclassService) { }
  
  ngOnInit(): void {
    this.searchService.searchEvent.subscribe((query: string) => {
      this.masterClasses = this.masterClassesCopy.filter((masterClass: IMasterClass) => 
        masterClass.name.toLowerCase().includes(query.toLowerCase())
      );
    });

    this.masterClassService.getMasterClasses().subscribe((data: IMasterClass[]) => {
      this.masterClasses = data;
      this.masterClassesCopy = data;
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
    
    return `${weekday}, ${day} ${month} ${year}`;
  }

  onRegisterClick(id: number): void {
    if (this.authService.isLoggedIn()) {
      this.masterClassService.getMasterClass(id).subscribe((masterClass: any) => {
        this.masterClassService.updateParticipants(id, masterClass.participants + 1).subscribe((data: any) => {
          this.masterClassService.getMasterClasses().subscribe((data: IMasterClass[]) => {
            this.masterClasses = data;
            this.masterClassesCopy = data;
          });
        })
      });
      return;
    }
    this.dialog.open(ErrorPageComponent, {
      width: '300px',
    });
    return;
  }
}
