import { IRecipe, RecipeCategory } from "src/app/models/models";

export const recipesList: IRecipe[] = [
    { id: 1, category_id: 1, name: 'Carbonara', image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2021/02/05/Baked-Feta-Pasta-4_s4x3.jpg.rend.hgtvcom.616.493.suffix/1615916524567.jpeg', description: 'Delicious pasta recipe', category: RecipeCategory.pasta },
    { id: 2, category_id: 1, name: 'Margarita', image: 'https://static.toiimg.com/thumb/53110049.cms?width=1200&height=900', description: 'Yummy pizza recipe', category: RecipeCategory.pizza },
    { id: 3, category_id: 1, name: 'Caesar Salad', image: 'https://natashaskitchen.com/wp-content/uploads/2019/01/Caesar-Salad-Recipe-3.jpg', description: 'Healthy salad recipe', category: RecipeCategory.salad },
    { id: 4, category_id: 1, name: 'Hamburger Burger', image: 'https://images.pexels.com/photos/3616956/pexels-photo-3616956.jpeg?cs=srgb&dl=pexels-daniel-reche-3616956.jpg&fm=jpg', description: 'Good and delicious', category: RecipeCategory.burger },
];