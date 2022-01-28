import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Bratwurst mit Spätzle', 'Bratwurst bruacht keine Beschreibung', 'https://wips.plug.it/cips/buonissimo.org/cms/2012/01/bratwurst-con-spatzle.jpg?w=541&a=c&h=309'),
    new Recipe('Spaguetti Carbonara', 'Beste Spaguetti ever!', 'https://upload.wikimedia.org/wikipedia/commons/3/33/Espaguetis_carbonara.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
