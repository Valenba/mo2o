import { Routes } from '@angular/router';
import { RecipeListComponent } from './recipe-list/recipe-list.component';

export const routes: Routes = [
    { path: '', redirectTo: 'recipes', pathMatch: 'full'},
    { path: 'recipes', component: RecipeListComponent}
];