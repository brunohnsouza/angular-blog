import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-content',
  templateUrl: './post-content.component.html',
})
export class PostContentComponent {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  @Input() content: any[] = [];

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  copyToClipboard(item: any) {
    navigator.clipboard.writeText(item.text).then(() => {
      item.isCopy = true;
      
      setTimeout(() => {
        item.isCopy = false;
      }, 2000);
    }).catch(err => {
      console.error("Erro ao copiar código: ", err);
    });
  }
  

  ngOnInit() {
    this.content.map(item => {
      item.srcImage = item.srcImage || 'https://placehold.co/600x400/000000/FFF';
      item.altImage = item.altImage || 'Placeholder';

      if (item.id === 'bullet') {
        item.items = item.items.map((text: string) => this.highlightTextAfterColon(text));
      }
    });
  }

  highlightTextAfterColon(text: string): string {
    const parts = text.split(':');

    if (parts.length > 1) {
      return `<span class="font-medium text-primary">${parts[0]}:</span>${parts.slice(1).join(':')}`;
    }
    return text;
  }
}
