export interface IContentModel {
  name: string;
  path: string;
  arcPath: string;
}

export class ContentModel implements IContentModel {
  name: string;
  path: string;
  arcPath: string;
  constructor(data: IContentModel) {
    const { name, path, arcPath } = data;
    this.name = name;
    this.path = path;
    this.arcPath = arcPath;
  }
  static createModel(data: IContentModel): ContentModel {
    return new ContentModel(data);
  }
  static errorModel(): ContentModel {
    return new ContentModel({
      name: "",
      path: "",
      arcPath: "",
    });
  }
}
