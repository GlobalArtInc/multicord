import { SdcBlacklist } from "./sdc/sdc.blacklist";
import { SdcBots } from "./sdc/sdc.bots";
import { SdcMonitoring } from "./sdc/sdc.monitoring";
import { TopGgBots } from "./top-gg/top-gg.bots";
import { TopGgUsers } from "./top-gg/top-gg.users";

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
  public bots = new TopGgBots(this.token);
  public users = new TopGgUsers(this.token);
  
  constructor(private token?: string) {
    if(!token) {
      throw new Error("No token provided");
    }
  }
}