import { Component } from '@angular/core';
import { data, type ArticleProps } from 'src/assets/data/data';
import { formatTitlePost } from 'src/app/utils/formatTitlePost';
import { sortByDate } from 'src/app/utils/sortByDate';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  formatTitlePost = formatTitlePost;

  database: ArticleProps[] = [];

  constructor() {
    if (!data) {
      return;
    }

    this.database = sortByDate(data);
  }
}
