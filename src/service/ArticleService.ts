import { IArticle } from "../inerface/IArticle";

export class ArticleSerivce {
  article: IArticle;
  showDate: Date;
  constructor(article: IArticle) {
    this.article = article;
    this.showDate = new Date();
    this.showDate.setDate(this.showDate.getDate()+ 1);
  }

  async tagFilter(tags: string){
    if (tags !== ""){
      const separator=(/( |　|\s)+/g);
      const conditions = tags.split(separator);
      const list = await this.article.getList();
      return list.files.filter((info)=> new Date(info.createdDate) < this.showDate
        && conditions.every((tag)=>info.tags.includes(tag)));
    }else{
      return (await this.article.getList()).files;
    }
  }

  async wordFilter(words: string){
    if (words !== ""){
      const separator=(/( |　|\s)+/g);
      const conditions =new RegExp(`.*(${words.replace(separator, '|')}).*`);
      const list = await this.article.getList();
      return list.files.filter((info)=> new Date(info.createdDate) < this.showDate
        && (conditions.test(info.title) || info.tags.findIndex((tag)=> conditions.test(tag)) != -1));
    }else{
      return (await this.article.getList()).files;
    }
  }

  async getByName(name: string) {
    return this.article.byName(name);
  }
}
