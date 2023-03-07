import { AuthorModel } from "../model/AuthorModel";
import { BlogInfoModel } from "../model/InfoModel";
export interface IMaster {
  getBlogInfo(): Promise<BlogInfoModel>;
  getAuthor(): Promise<AuthorModel>;
}
