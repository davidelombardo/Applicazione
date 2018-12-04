import { Component, OnInit } from "@angular/core";
import { Recipes } from "../recipe.model";

@Component({
  selector: "app-recipe-item",
  templateUrl: "./recipe-item.component.html",
  styleUrls: ["./recipe-item.component.scss"]
})
export class RecipeItemComponent implements OnInit {
  currentRicetta: Recipes;
  constructor() {}

  ngOnInit() {}
}
