import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { IRecipe, RecipeCategory } from 'src/app/models/models';
import { RecipePageComponent } from '../recipe-page/recipe-page.component';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent {
  @Input() recipe: any = {
    id: 0,
    category_id: 0,
    name: '',
    image: '',
    description: '',
    steps: "",
    category_title: "",
    username: "",
  };

  constructor(private dialog: MatDialog) { }

  openRecipeDialog(): void {
    const dialogRef = this.dialog.open(RecipePageComponent, {
      width: '600px',
      data: this.recipe,
    });
  }
}
