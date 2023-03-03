import { IMaster } from "../inerface/IMaster";
import { InfoModel } from "../model/InfoModel";
import { dbUrl } from "./constant";

export class MasterDao implements IMaster {
  url: string;
  constructor() {
    this.url = dbUrl;
  }
  async getInfo(): Promise<InfoModel> {
    const apiUrl = `${this.url}/info.json`;
    return fetch(apiUrl).then(async (res) => {
      const result = await res.json();
      return InfoModel.createModel(result);
    }).catch((err) => {
      console.error(err);
      return InfoModel.errorModel();
    });
  }
}
