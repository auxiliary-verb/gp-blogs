import { InfoModel } from "../model/InfoModel";
export interface IMaster {
  getInfo(): Promise<InfoModel>;
}
