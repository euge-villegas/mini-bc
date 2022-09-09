import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";

@Injectable({providedIn: 'root'})
export class DataStorageService {
    constructor(private http: HttpClient, private recipeService: RecipeService) {}
        
    storeRecipes() {
        const recipes = this.recipeService.getRecipes();
        return this.http.put('https://recipe-app-6df85-default-rtdb.firebaseio.com/recipes.json', recipes)
        .subscribe(response => {
            console.log(response);
            
        });
    }

    fetchRecipes() {
        this.http.get<Recipe[]>('https://recipe-app-6df85-default-rtdb.firebaseio.com/recipes.json')
        .subscribe(recipes => {
            this.recipeService.setRecipes(recipes);
        });
    }
    

}