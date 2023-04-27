import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IRecipe } from 'src/app/models/models';
import { RecipeService } from 'src/app/services/recipe.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-recipes-category',
  templateUrl: './recipes-category.component.html',
  styleUrls: ['./recipes-category.component.scss']
})
export class RecipesCategoryComponent implements OnInit {
  category_name: string = "";
  recipes: IRecipe[] = [];
  recipes_copy: IRecipe[] = [];

  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private searchService: SearchService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');     
    if (id) {
      this.recipeService.getRecipesByCategory(Number(id)).subscribe((data) => {
        this.recipes = data;
        this.recipes_copy = this.recipes;
        this.searchService.searchEvent.subscribe((query: string) => {
          this.recipes = this.recipes_copy.filter((recipe: IRecipe) => 
            recipe.name.toLowerCase().includes(query.toLowerCase())
          );
        });
        this.category_name = data[0].category;
      });
    }
  }

}
