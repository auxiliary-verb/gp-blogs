import { ContentModel } from "../model/ContentModel";
export interface IContent {
  byName(id: string): Promise<ContentModel>;
}
