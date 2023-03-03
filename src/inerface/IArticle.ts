import { ArticleModel } from "../model/ArticleModel";
export interface IArticle {
  byName(name: string): Promise<ArticleModel>;
}
