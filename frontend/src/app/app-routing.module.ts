import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './layouts/main/main.component';
import { RecipesPageComponent } from './pages/recipes-page/recipes-page.component';
import { MasterClassesPageComponent } from './pages/master-classes-page/master-classes-page.component';
import { RecipesCategoryComponent } from './pages/recipes-category/recipes-category.component';

import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';

const routes: Routes = [
  { path: 'recipes', component: RecipesPageComponent },
  { path: 'recipes/:category/:id', component: RecipesCategoryComponent },
  { path: 'master-classes', component: MasterClassesPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: '**', component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
