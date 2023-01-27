import { SdcApi } from "./sdc.api";
import { SdcStats } from "./sdc.interface";

export class SdcBlacklist {
  private api = new SdcApi();
  constructor(private token: string) {

  }

  public warns(id: string) {
    return this.api.send('get', `warns/${id}`, {}, {
      headers: {
        Authorization: `SDC ${this.token}`,
      }
    });  
  }
}