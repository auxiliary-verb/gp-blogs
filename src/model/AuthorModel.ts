export interface IAuthorModel {
  name: string;
  description: string;
}

export class AuthorModel implements IAuthorModel {
  name: string;
  description: string;
  constructor(data: IAuthorModel) {
    const {
      name,
      description,
    } = data;
    this.name = name;
    this.description = description;
  }

  static createModel(data: IAuthorModel): AuthorModel {
    return new AuthorModel(data);
  }

  static errorModel(): AuthorModel {
    return new AuthorModel({
      name: "名無し",
      description: "説明の取得に失敗しました。",
    });
  }
}
