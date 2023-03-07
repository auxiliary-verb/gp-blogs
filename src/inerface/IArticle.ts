import { ArticleListModel } from "../model/ArticleListModel";
import { ArticleModel } from "../model/ArticleModel";
export interface IArticle {
  getList(): Promise<ArticleListModel>;
  byName(name: string): Promise<ArticleModel>;
}
