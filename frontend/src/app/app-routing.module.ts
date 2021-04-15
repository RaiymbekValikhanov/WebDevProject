import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { TitlePageComponent } from './title-page/title-page.component';
import {AppComponent} from './app.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'title/:id', component: TitlePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
