export interface IArticleModel {
  title: string;
  description: string;
  body: string;
  createdDate?: Date;
  thumbnail: string;
  tags: string[];
}

export class ArticleModel implements IArticleModel {
  title: string;
  description: string;
  body: string;
  createdDate?: Date;
  thumbnail: string;
  tags: string[];
  constructor(data: IArticleModel) {
    const {
      title,
      description,
      body,
      createdDate,
      thumbnail,
      tags,
    } = data;
    this.title = title;
    this.description = description;
    this.body = body;
    this.createdDate = createdDate;
    this.thumbnail = thumbnail;
    this.tags = tags;
  }

  static createModel(data: IArticleModel): ArticleModel {
    return new ArticleModel(data);
  }

  static errorModel(): ArticleModel {
    return new ArticleModel({
      title: "記事の取得に失敗しました。",
      description: "記事の取得に失敗しました。",
      body: "記事の取得に失敗しました。",
      createdDate: undefined,
      thumbnail: "",
      tags: [],
    });
  }
}
