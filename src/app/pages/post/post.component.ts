import { Component } from '@angular/core';
// biome-ignore lint/style/useImportType: <explanation>
import { ActivatedRoute } from '@angular/router';
import { data, type ArticleProps } from 'src/assets/data/data';
import { formatTitlePost } from 'src/app/utils/formatTitlePost';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
})
export class PostComponent {
  textHomeLink = 'Voltar ao início';

  datePost = "";
  title = "";
  description = "";
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  content: any[] = [];

  private idElement: string | null = "0";
  private database?: ArticleProps;

  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(
      // biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
      result => this.idElement = result.get("id")
    )

    this.setContentToComponent(this.idElement);
  }

  setContentToComponent(id: string | null) {
    if (!id) {
      console.error("ID não encontrado");
      return;
    }

    this.database = data.filter(post => formatTitlePost(post.title) === id)[0];

    if (!this.database) {
      console.error("Post não encontrado");
      return;
    }

    this.datePost = this.database.datePost
    this.title = this.database.title;
    this.content = this.database.content;
  }
}
