export interface IArticleInfoModel {
  name: string;
  title: string;
  createdDate: string;
  thumbnail: string;
  tags: string[];
}

export interface IArticleListModel {
  files: IArticleInfoModel[];
}

export class ArticleListModel implements IArticleListModel {
  files: IArticleInfoModel[];
  constructor(data: IArticleListModel) {
    const {
      files,
    } = data;
    this.files = files;
  }

  static createModel(data: IArticleListModel): ArticleListModel {
    return new ArticleListModel(data);
  }

  static errorModel(): ArticleListModel {
    return new ArticleListModel({
      files: [],
    });
  }
}

