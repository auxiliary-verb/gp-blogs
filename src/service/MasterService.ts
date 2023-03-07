import { IMaster } from "../inerface/IMaster";

export class MasterSerivce {
  master: IMaster;
  constructor(master: IMaster) {
    this.master = master;
  }
  
  async getBlogInfoMaster() {
    return this.master.getBlogInfo();
  }

  async getAuthorMaster() {
    return this.master.getAuthor();
  }
}
