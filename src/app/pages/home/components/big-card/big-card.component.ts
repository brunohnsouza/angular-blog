import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
})
export class BigCardComponent {
  @Input()
  photoCover = ""

  @Input() photoCoverAlt = ""

  @Input()
  cardDate = ""

  @Input()
  cardTitle = ""

  @Input()
  cardSubtitle = ""

  @Input()
  cardUrl = ""

  ngOnInit() {
    if (!this.photoCover) {
      this.photoCover = "https://placehold.co/600x400/000000/FFF"
    }

    if (!this.photoCoverAlt) {
      this.photoCoverAlt = "Placeholder"
    }

    if (!this.cardDate) {
      this.cardDate = "Data não informada"
    }

    if (!this.cardTitle) {
      this.cardTitle = "Título não informado"
    }

    if (!this.cardSubtitle) {
      this.cardSubtitle = "Subtítulo não informado"
    }
  }
}
