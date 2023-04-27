import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { IRecipe } from 'src/app/models/models';

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.scss']
})
export class RecipePageComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: IRecipe) {}
}
