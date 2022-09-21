import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[] = [];
  subscription: Subscription;

  public pageSlice = this.recipes.slice(0, 2)

  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.subscription = this.recipeService.recipesChanged
        .subscribe(
            (recipes: Recipe[]) => {
                (this.recipes) = recipes;
            }
        )
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  OnPageChange(event: PageEvent) {
    
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.recipes.length) {
        endIndex = this.recipes.length;
    }

    this.pageSlice = this.recipes.slice(startIndex, endIndex);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
