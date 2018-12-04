import { Component, OnInit } from "@angular/core";
import { Recipes } from "./recipe.model";
@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.scss"]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipes[] = [
    new Recipes(
      "Arancine: Riso, Ragu', pangrattato",
      "lorem ipsum dsa dsa",
      // tslint:disable-next-line:max-line-length
      "http://www.anticafocacceria.it/media/filer_public_thumbnails/filer_public/2013/05/15/arancina.jpg__570x390_q100_subsampling-2_upscale.jpg"
    ),

    new Recipes(
      "Busiate allo scoglio: cozze, calamari, pomodoro",
      "lorem ipsum dsa dsa",
      // tslint:disable-next-line:max-line-length
      "https://media-cdn.tripadvisor.com/media/photo-s/01/a9/21/a0/busiate-allo-scoglio.jpg"
    ),

    new Recipes(
      "Cannolo: ricotta e la scoccia",
      "lorem ipsum dsa dsa",
      // tslint:disable-next-line:max-line-length
      "http://www.meteoweb.eu/wp-content/uploads/2017/09/cannolo-siciliano-640x480.jpg"
    )
  ];
  constructor() {}

  ngOnInit() {}
}
