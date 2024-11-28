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
  paginatedData: ArticleProps[] = [];

  itemsPerPage = 3;
  currentPage = 1;
  totalPages = 1;

  constructor() {
    if (!data) {
      return;
    }

    this.database = sortByDate(data);

    this.totalPages = Math.ceil((this.database.length - 1) / this.itemsPerPage);

    this.paginateData();
  }

  paginateData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage + 1;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedData = this.database.slice(startIndex, endIndex);
  }

  goToPage(page: number) {
    if (page < 1 || page > this.totalPages) {
      return;
    }
    this.currentPage = page;
    this.paginateData();
  }

  nextPage() {
    this.goToPage(this.currentPage + 1);
  }

  prevPage() {
    this.goToPage(this.currentPage - 1);
  }

  firstPage() {
    this.goToPage(1);
  }

  lastPage() {
    this.goToPage(this.totalPages);
  }
}