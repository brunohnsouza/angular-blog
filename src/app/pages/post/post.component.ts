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
  titleShare = 'Gostou? Compartilhe esse conteúdo!';

  postUrl = "";
  socialNetworks: { url: string, icon: string }[] = [];
  datePost = "";
  title = "";
  description = "";
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  content: any[] = [];

  private idElement: string | null = null;
  private database?: ArticleProps;

  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(
      result => {
        this.idElement = result.get("id")
        this.postUrl = `https://oblog.vercel.app/post/${this.idElement}`;

        this.socialNetworks = [
          {
            url: `https://twitter.com/intent/tweet?url=${this.postUrl}&text=Confira%20este%20post%20incrível!`,
            icon: 'x-twitter'
          },
          {
            url: `https://www.linkedin.com/shareArticle?url=${this.postUrl}`,
            icon: 'linkedin'
          },
          {
            url: `https://www.facebook.com/sharer/sharer.php?u=${this.postUrl}`,
            icon: 'facebook'
          },
          {
            url: `https://api.whatsapp.com/send?text=Olha%20esse%20conteúdo%20incrível%20no%20OBlog!%20${this.postUrl}`,
            icon: 'whatsapp'
          },
          {
            url: `https://telegram.me/share/url?url=${this.postUrl}&text=Olha%20esse%20conteúdo%20incrível%20no%20OBlog!%20`,
            icon: 'telegram'
          },
          {
            url: `https://www.reddit.com/submit?url=${this.postUrl}&title=Olha%20esse%20conteúdo%20incrível%20no%20OBlog!%20`,
            icon: 'reddit'
          },
        ]
      }
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
