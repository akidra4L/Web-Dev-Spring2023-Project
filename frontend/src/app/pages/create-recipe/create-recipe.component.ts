import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RecipeService } from 'src/app/services/recipe.service';
import { IRecipe, ICategoriesList } from 'src/app/models/models';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

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
    id: new FormControl('', Validators.required),
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
      const id = formData.id;
      const name = formData.name;
      const image = formData.image;
      const description = formData.description;
      const category = formData.category
      const stepsArray = formData.steps?.split('.').map(step => step.trim());

      this.recipeService.getCategoryByTitle(category).subscribe((category: ICategoriesList) =>{
        this.category_id = category.id;
      })

      const newRecipe : IRecipe = {
        id : parseInt(id!),
        category_id : this.category_id,
        name : name!,
        image : image!,
        description: description!,
        category: category!,
        steps : stepsArray!
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
