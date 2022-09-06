import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

import { Recipe } from "./recipe.model";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe', 
            'This is a Test', 
            'https://preppykitchen.com/wp-content/uploads/2022/07/Red-Velvet-Recipe-Card-1a.jpg',
            [
                new Ingredient('Cheese', 100),
                new Ingredient('Strawberries', 20)
            ]),
        new Recipe(
            'What else you need to say?', 
            'Chocolate cake', 
            'https://preppykitchen.com/wp-content/uploads/2022/07/Red-Velvet-Recipe-Card-1a.jpg',
            [
                new Ingredient('Flour', 100),
                new Ingredient('Chocolate chips', 100)
            ])
    ];
    getRecipes() {
        return this.recipes.slice();
    }
}