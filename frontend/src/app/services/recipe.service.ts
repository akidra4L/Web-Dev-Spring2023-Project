import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

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
  private categories = getCategories;
  private recipes = recipesList;


  constructor(private client: HttpClient) { }

  getRecipesByCategory(id: number): Observable<IRecipe[]> {
    const filteredRecipes = this.recipes.filter((recipe: IRecipe) => recipe.category_id === id);
    return of(filteredRecipes);
  }

  getCategoryById(id: number): Observable<any> {
    return this.client.get<any>(`${this.BASE_URL}/categories/${id}`);
  }

  getCategoryByID(id: number): Observable<any> {
    return this.client.get<any>(`${this.BASE_URL}/categories/${id}`);
  }

  getCategories(): Observable<ICategoriesList[]> {
    return this.client.get<ICategoriesList[]>(`${this.BASE_URL}/categories`);
  }

  createRecipe(recipe: IRecipe): Observable<IRecipe> {
    console.log(headers);
    
    return this.client.post<IRecipe>(`${this.BASE_URL}/recipes/create/`, recipe, {headers});
  }
}
