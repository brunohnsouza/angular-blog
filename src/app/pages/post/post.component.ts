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
        this.postUrl = `https://oblog.vercel.app/posts/${this.idElement}`;

        const encoded_url = encodeURIComponent(this.postUrl);

        this.socialNetworks = [
          {
            url: `https://twitter.com/intent/tweet?url=${this.postUrl}&text=${this.description}&via=OBlog`,
            icon: 'x-twitter'
          },
          {
            url: `https://www.linkedin.com/sharing/share-offsite/?url=${encoded_url}`,
            icon: 'linkedin'
          },
          {
            url: `https://www.facebook.com/sharer/sharer.php?u=${encoded_url}&t=${this.title}`,
            icon: 'facebook'
          },
          {
            url: `https://api.whatsapp.com/send?text=Olha que legal esse conteúdo que vi no OBlog! ${this.description} ${this.postUrl}`,
            icon: 'whatsapp'
          },
          {
            url: `https://telegram.me/share/url?url=${this.postUrl}&text=${this.description}`,
            icon: 'telegram'
          },
          {
            url: `https://www.reddit.com/submit?url=${encoded_url}&title=${this.title}`,
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
