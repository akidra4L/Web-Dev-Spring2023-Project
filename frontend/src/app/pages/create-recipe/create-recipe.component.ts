import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { RecipeService } from 'src/app/services/recipe.service';
import { IRecipe, ICategoriesList } from 'src/app/models/models';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.scss']
})
export class CreateRecipeComponent implements OnInit {
  categories: ICategoriesList[] = [];
  category_id !: number;
  selectedCategory: any;
  createRecipeForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', [Validators.required]),
    image: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    category: new FormControl(null, Validators.required),
    steps: new FormControl('', Validators.required),
  });

  constructor(private recipeService: RecipeService, @Inject(MAT_DIALOG_DATA) public data: ICategoriesList, private dialogRef: MatDialogRef<CreateRecipeComponent>) { }

  ngOnInit(): void {
    this.recipeService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  onSubmit(): void {
    if(this.createRecipeForm.valid){
      const formData = this.createRecipeForm.value;
      const name = formData.name;
      const image = formData.image;
      const description = formData.description;
      const category = formData.category
      const stepsArray = formData.steps

      this.recipeService.getCategoryByID(Number(category!)).subscribe(data => {
        this.category_id = data.id;

        const newRecipe: any = {
          name: name!,
          description: description!,
          image : image!,
          steps: stepsArray!,
          category_id : this.category_id,
        }
  
        console.log(newRecipe);
  
        this.recipeService.createRecipe(newRecipe).subscribe(
          (response) => {
            console.log('Recipe created successfully!', response);
          },
          (error) =>{
            console.log('Error: ', error);
          }
        );
      });
    }
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  isValidCategory(category: any): boolean {
    const validCategories = ['Salad', 'Italian', 'Meat', 'Burger', 'Soup'];
    return validCategories.includes(category);
  }
}
