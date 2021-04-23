import { AfterContentInit, AfterViewInit, ChangeDetectorRef, Component, HostListener, OnInit} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  visible: boolean = false;
  genres: string[] = [];
  selected: boolean[] = [];
  checkoutForm = this.formBuilder.group({
    yearFrom: 1960,
    yearTo: 2021,
    genres: [],
    orderBy: 'Rating',
  });

  constructor(
    public cd: ChangeDetectorRef,
    private formBuilder: FormBuilder,
    private filterService: FilterService,
  ) { }

  ngOnInit(): void {
    this.genres = ['Adventure', 'Drama', 'Detective', 'Romantic', 'Sport', 'Comedy', 'Future', 'Super Hero'];
    this.selected =  Array(this.genres.length).fill(false);
  }
  genresList(event: any): void {
    if (event.target.className === 'selected-genres') {
      this.visible = !this.visible;
    } else {
      this.visible = false;
    }
  }

  passGenres(): void {
    this.checkoutForm.value.genres = this.genres.filter((value, index) => {
      return this.selected[index];
    });
  }

  onSubmit(): void {
    this.filterService.filterAnime(this.checkoutForm.value);
  }
}
