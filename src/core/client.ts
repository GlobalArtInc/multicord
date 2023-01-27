import { SdcBlacklist } from "./sdc/sdc.blacklist";
import { SdcBots } from "./sdc/sdc.bots";
import { SdcMonitoring } from "./sdc/sdc.monitoring";

export class SdcClient {
  public monitoring = new SdcMonitoring(this.token); 
  public blacklist = new SdcBlacklist(this.token);
  public bots = new SdcBots(this.token);

  constructor(private token?: string) {
    if(!token) {
      throw new Error("No token provided");
    }
  }
}

export class TopGgClient {
  constructor(private token?: string) {
    if(!token) {
      throw new Error("No token provided");
    }
  }
}