import { Component } from '@angular/core';

import { getCategories } from './generator';
import { ICategory } from 'src/app/models/models';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  categories: ICategory[] = getCategories;
}
