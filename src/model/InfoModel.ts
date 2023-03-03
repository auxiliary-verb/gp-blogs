export interface IInfoModel {
  title: string;
  description: string;
}

export class InfoModel implements IInfoModel {
  title: string;
  description: string;
  constructor(data: IInfoModel) {
    const {
      title,
      description,
    } = data;
    this.title = title;
    this.description = description;
  }

  static createModel(data: IInfoModel): InfoModel {
    return new InfoModel(data);
  }

  static errorModel(): InfoModel {
    return new InfoModel({
      title: "タイトルの取得に失敗しました。",
      description: "説明の取得に失敗しました。",
    });
  }
}
