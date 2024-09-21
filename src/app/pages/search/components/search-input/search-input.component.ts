import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
})
export class SearchInputComponent {
  @Input() query = '';
  @Output() searchQuery = new EventEmitter<string>();

  fuseSearch(query: string) {
    this.searchQuery.emit(query);
  }
}
