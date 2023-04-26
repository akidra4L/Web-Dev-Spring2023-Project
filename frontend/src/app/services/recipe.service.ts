import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IRecipe } from '../models/models';
import { recipesList } from '../pages/recipes-page/generator';
import { getCategories } from '../layouts/main/generator';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private categories = getCategories;
  private recipes = recipesList;

  constructor() { }

  getRecipesByCategory(id: number): Observable<IRecipe[]> {
    const filteredRecipes = this.recipes.filter((recipe: IRecipe) => recipe.category_id === id);
    return of(filteredRecipes);
  }
}
