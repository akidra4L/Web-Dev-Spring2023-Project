import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthInterceptor } from './interceptors/AuthInterceptor';

import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { MainComponent } from './layouts/main/main.component';
import { RecipesPageComponent } from './pages/recipes-page/recipes-page.component';
import { RecipePageComponent } from './pages/recipe-page/recipe-page.component';
import { MasterClassesPageComponent } from './pages/master-classes-page/master-classes-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { RecipesCategoryComponent } from './pages/recipes-category/recipes-category.component';
import { RecipeItemComponent } from './pages/recipe-item/recipe-item.component';
import { CreateRecipeComponent } from './pages/create-recipe/create-recipe.component';
import { CreateMasterClassComponent } from './pages/create-master-class/create-master-class.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
    InputComponent,
    MainComponent,
    RecipesPageComponent,
    RecipePageComponent,
    MasterClassesPageComponent,
    LoginPageComponent,
    SignupPageComponent,
    ErrorPageComponent,
    RecipesCategoryComponent,
    RecipeItemComponent,
    CreateRecipeComponent,
    CreateMasterClassComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatCardModule,
    MatSelectModule,
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
