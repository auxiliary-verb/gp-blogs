import { IArticle } from "../inerface/IArticle";
import { ArticleModel } from "../model/ArticleModel";
import { dbUrl } from "./constant";
export class ArticleDao implements IArticle {
  url: string;
  constructor() {
    this.url = dbUrl;
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
