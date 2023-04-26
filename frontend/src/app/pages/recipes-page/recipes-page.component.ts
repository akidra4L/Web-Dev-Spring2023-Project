import { Component } from '@angular/core';

import { IRecipe } from 'src/app/models/models';

@Component({
  selector: 'app-recipes-page',
  templateUrl: './recipes-page.component.html',
  styleUrls: ['./recipes-page.component.scss']
})
export class RecipesPageComponent {
  recipes: IRecipe[] = [
    { id: 1, name: 'Pasta', image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2021/02/05/Baked-Feta-Pasta-4_s4x3.jpg.rend.hgtvcom.616.493.suffix/1615916524567.jpeg', description: 'Delicious pasta recipe' },
    { id: 2, name: 'Pizza', image: 'https://static.toiimg.com/thumb/53110049.cms?width=1200&height=900', description: 'Yummy pizza recipe' },
    { id: 3, name: 'Salad', image: 'https://natashaskitchen.com/wp-content/uploads/2019/01/Caesar-Salad-Recipe-3.jpg', description: 'Healthy salad recipe' },
    { id: 4, name: 'Burger', image: 'https://images.pexels.com/photos/3616956/pexels-photo-3616956.jpeg?cs=srgb&dl=pexels-daniel-reche-3616956.jpg&fm=jpg', description: 'Good and delicious' },
  ];
}
