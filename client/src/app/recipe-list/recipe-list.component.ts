import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Array<any>;
  pattern;


  constructor(public apiService : ApiService) { }

  ngOnInit() {
    this.apiService.getRecipes().subscribe(data => {
      this.recipes = data;
    })
  }

}
