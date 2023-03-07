export interface IBlogInfoModel {
  title: string;
  description: string;
}

export class BlogInfoModel implements IBlogInfoModel {
  title: string;
  description: string;
  constructor(data: IBlogInfoModel) {
    const {
      title,
      description,
    } = data;
    this.title = title;
    this.description = description;
  }

  static createModel(data: IBlogInfoModel): BlogInfoModel {
    return new BlogInfoModel(data);
  }

  static errorModel(): BlogInfoModel {
    return new BlogInfoModel({
      title: "タイトルの取得に失敗しました。",
      description: "説明の取得に失敗しました。",
    });
  }
}
