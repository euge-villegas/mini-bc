import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a Test', 'https://preppykitchen.com/wp-content/uploads/2022/07/Red-Velvet-Recipe-Card-1a.jpg'),
    new Recipe('Another Test Recipe', 'This is a Test', 'https://preppykitchen.com/wp-content/uploads/2022/07/Red-Velvet-Recipe-Card-1a.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }
  
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe)
  }
}
