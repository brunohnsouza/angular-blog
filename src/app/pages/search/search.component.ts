import { Component } from '@angular/core';
import { data, type ArticleProps } from 'src/assets/data/data';
import Fuse from "fuse.js";
import { formatTitlePost } from 'src/app/utils/formatTitlePost';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {
  formatTitlePost = formatTitlePost;

  query = '';

  options = {
    keys: ['title', 'subtitle'],
    minMatchCharLength: 2,
    includesMatches: true,
  }

  database: ArticleProps[] = [];
  filteredPosts: ArticleProps[] = [];
  fuse: Fuse<ArticleProps> | undefined;

  constructor() {
    if (!data) {
      return;
    }

    this.database = data;
    this.fuse = new Fuse(this.database, this.options);
  }

  fuseSearch(query: string) {
    if (!this.fuse) return;

    const articles = this.fuse.search(query).map((result) => result.item);
    this.filteredPosts = articles;
  }
}
