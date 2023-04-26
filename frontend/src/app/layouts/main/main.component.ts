import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { getCategories } from './generator';
import { ICategory } from 'src/app/models/models';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  categories: ICategory[] = getCategories;

  constructor(private router: Router) { }

  onCategoryClick(id: number): void {
    this.router.navigate(['/recipes', 'category', id]);
  }
}
