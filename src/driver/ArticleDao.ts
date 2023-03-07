import { IArticle } from "../inerface/IArticle";
import { ArticleListModel, IArticleListModel } from "../model/ArticleListModel";
import { ArticleModel } from "../model/ArticleModel";
import { dbUrl } from "./constant";
export class ArticleDao implements IArticle {
  url: string;
  constructor() {
    this.url = dbUrl;
  }
  
  async getList(): Promise<ArticleListModel> {
    const apiUrl = `${this.url}/list.json`;
    console.log(apiUrl);
    return fetch(apiUrl).then(async (res) => {
      console.log(res);
      const result:IArticleListModel = await res.json();
      return ArticleListModel.createModel(result);
    }).catch((err) => {
      console.error(err);
      return ArticleListModel.errorModel();
    });
  }

  async byName(name: string): Promise<ArticleModel> {
    const apiUrl = `${this.url}/${name}.json`;
    return fetch(apiUrl).then(async (res) => {
      const result = await res.json();
      return ArticleModel.createModel(result);
    }).catch((err) => {
      console.error(err);
      return ArticleModel.errorModel();
    });
  }
}
