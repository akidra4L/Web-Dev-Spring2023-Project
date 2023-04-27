import { ICategory, RecipeCategory } from "src/app/models/models";

export const getCategories: ICategory[] = [
    { id: 1, category_id: 1, title: "Salad", imgURL: "./../../assets/salad.svg", category: RecipeCategory.salad },
    { id: 2, category_id: 2, title: "Burger", imgURL: "./../../assets/burger.svg", category: RecipeCategory.burger },
    { id: 3, category_id: 3, title: "Italian", imgURL: "./../../assets/pizza.svg", category: RecipeCategory.italian },
    { id: 4, category_id: 4, title: "Soup", imgURL: "./../../assets/soup.svg", category: RecipeCategory.soup },
    { id: 5, category_id: 5, title: "Meat", imgURL: "./../../assets/meat.svg", category: RecipeCategory.meat },
]