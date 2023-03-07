import { IMaster } from "../inerface/IMaster";
import { AuthorModel, IAuthorModel } from "../model/AuthorModel";
import { BlogInfoModel, IBlogInfoModel } from "../model/InfoModel";
import { dbUrl } from "./constant";

export interface IMasterModel {
  blog: IBlogInfoModel;
  author: IAuthorModel;
}

export class MasterDao implements IMaster {
  url: string;
  constructor() {
    this.url = dbUrl;
  }
  async getBlogInfo(): Promise<BlogInfoModel> {
    const apiUrl = `${this.url}/info.json`;
    return fetch(apiUrl).then(async (res) => {
      const result:IMasterModel = await res.json();
      return BlogInfoModel.createModel(result.blog);
    }).catch((err) => {
      console.error(err);
      return BlogInfoModel.errorModel();
    });
  }

  async getAuthor(): Promise<AuthorModel> {
    const apiUrl = `${this.url}/author.json`;
    return fetch(apiUrl).then(async (res) => {
      const result:IMasterModel = await res.json();
      return AuthorModel.createModel(result.author);
    }).catch((err) => {
      console.error(err);
      return AuthorModel.errorModel();
    });
  }
}
