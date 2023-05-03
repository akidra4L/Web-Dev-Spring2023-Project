import { Injectable } from '@angular/core';
import { Observable, map, pipe } from 'rxjs';

import { ICategoriesList, IRecipe } from '../models/models';
import { recipesList } from '../pages/recipes-page/generator';
import { getCategories } from '../layouts/main/generator';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const headers = {
  'Authorization': `Bearer ${localStorage.getItem('token')}`,
};

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  BASE_URL = "http://127.0.0.1:8000"

  constructor(private client: HttpClient) { }

  getRecipes(): Observable<IRecipe[]> {
    return this.client.get<IRecipe[]>(`${this.BASE_URL}/recipes/`);
  }

  getRecipesByCategory(id: number): Observable<IRecipe[]> {    
    return this.getRecipes().pipe(
      map((recipes: IRecipe[]) => {
        return recipes.filter((recipe: IRecipe) => recipe.category_id === id);
      })
    );
  }

  getCategoryByID(id: number): Observable<any> {
    return this.client.get<any>(`${this.BASE_URL}/categories/${id}`);
  }

  getCategories(): Observable<ICategoriesList[]> {
    return this.client.get<ICategoriesList[]>(`${this.BASE_URL}/categories`);
  }

  createRecipe(recipe: IRecipe): Observable<IRecipe> {    
    return this.client.post<IRecipe>(`${this.BASE_URL}/recipes/create/`, recipe, {headers});
  }
}
