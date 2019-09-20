import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [ 
    new Recipe('Test Recipe',
              'This is simply a test.',
              'http://wallpapersdsc.net/wp-content/uploads/2016/09/Junk-Food-Pictures.jpg'),
              new Recipe('Test Recipe',
              'This is simply a test.',
              'http://wallpapersdsc.net/wp-content/uploads/2016/09/Junk-Food-Pictures.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
