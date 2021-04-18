import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { TitlePageComponent } from './title-page/title-page.component';
import { FilterComponent } from './filter/filter.component';
import { GenreOptionComponent } from './filter/genre-option/genre-option.component';
import { GenreItemComponent } from './filter/genre-item/genre-item.component';
import { AnimeListHeaderComponent} from './anime-list-header/anime-list-header.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    TitlePageComponent,
    FilterComponent,
    GenreOptionComponent,
    GenreItemComponent,
    AnimeListHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
