import { Component, OnInit } from '@angular/core';

import { IRecipe } from 'src/app/models/models';
import { SearchService } from 'src/app/services/search.service';

import { recipesList } from './generator';

@Component({
  selector: 'app-recipes-page',
  templateUrl: './recipes-page.component.html',
  styleUrls: ['./recipes-page.component.scss']
})
export class RecipesPageComponent implements OnInit {
  recipes: IRecipe[] = recipesList;
  recipesCopy = this.recipes;

  constructor(private searchService: SearchService) {  }

  ngOnInit(): void {
    this.searchService.searchEvent.subscribe((query: string) => {
      this.recipes = this.recipesCopy.filter((recipe: IRecipe) => 
        recipe.name.toLowerCase().includes(query.toLowerCase())
      );
    });
  }
}
