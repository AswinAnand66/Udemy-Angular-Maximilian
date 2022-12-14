import { outputAst } from '@angular/compiler';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
   recipes: Recipe[] = [
    new Recipe('A Test','This is test','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTYc0k-oKobzOrRoFYD1CzGAkOIMds2Pp9Bg&usqp=CAU'),
    new Recipe('Another','This is test','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTYc0k-oKobzOrRoFYD1CzGAkOIMds2Pp9Bg&usqp=CAU'),
    new Recipe('A Test 2','This is test','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTYc0k-oKobzOrRoFYD1CzGAkOIMds2Pp9Bg&usqp=CAU')
   ];
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
      this.recipeWasSelected.emit(recipe);
  }
}
