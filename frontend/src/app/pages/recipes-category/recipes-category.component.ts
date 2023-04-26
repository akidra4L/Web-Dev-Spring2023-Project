import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IRecipe } from 'src/app/models/models';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipes-category',
  templateUrl: './recipes-category.component.html',
  styleUrls: ['./recipes-category.component.scss']
})
export class RecipesCategoryComponent implements OnInit {
  recipes: IRecipe[] = [];

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');     
    console.log(id);
    
    if (id) {
      this.recipeService.getRecipesByCategory(Number(id)).subscribe((data) => {
        this.recipes = data;
      })
    }
    console.log(this.recipes);
    
  }

}
