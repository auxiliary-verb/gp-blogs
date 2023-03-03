import { IContent } from "../inerface/IContent";
import { ContentModel } from "../model/ContentModel";
import { dictArcUrl, dictUrl } from "./constant";
export class ContentDao implements IContent {
  url: string;
  arc: string;
  constructor() {
    this.url = dictUrl;
    this.arc = dictArcUrl;
  }
  async byName(name: string): Promise<ContentModel> {
    const path = `${this.url}/${name}`;
    const arcPath = `${this.arc}/blob/main/archive/${name}`;
    return ContentModel.createModel({name, path, arcPath});
  }
}
