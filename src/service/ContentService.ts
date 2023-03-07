import { IContent } from "../inerface/IContent";

export class ContentSerivce {
  content: IContent;
  constructor(content: IContent) {
    this.content = content;
  }
  
  async getByName(name: string) {
    return this.content.byName(name);
  }
}
