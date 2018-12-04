import { Component, OnInit } from '@angular/core';
import { Recipes } from "./recipe.model";
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipes[] = [
    new Recipes(
      "Riso, Ragu', pangrattato",
      "lorem ipsum dsa dsa",
      // tslint:disable-next-line:max-line-length
      "http://www.anticafocacceria.it/media/filer_public_thumbnails/filer_public/2013/05/15/arancina.jpg__570x390_q100_subsampling-2_upscale.jpg"
    )
  ];
  constructor() { }

  ngOnInit() {
  }

}
