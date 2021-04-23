import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { TitlePageComponent } from './title-page/title-page.component';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FilmPageComponent } from './film-page/film-page.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'title/:name', component: TitlePageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'films', component: FilmPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
