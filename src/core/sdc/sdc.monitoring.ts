import { SdcApi } from "./sdc.api";

export class SdcMonitoring {
  private api = new SdcApi();

  constructor(private token: string) {

  }

  public getGuild(guildId: string) {
    return this.api.send('get', `guild/${guildId}`, {}, {
      headers: {
        Authorization: `SDC ${this.token}`,
      }
    });  
  }

  public getGuildPlace(guildId: string) {
    return this.api.send('get', `guild/${guildId}/place`, {}, {
      headers: {
        Authorization: `SDC ${this.token}`,
      }
    });  
  }

  public getGuildRated(guildId: string) {
    return this.api.send('get', `guild/${guildId}/rated`, {}, {
      headers: {
        Authorization: `SDC ${this.token}`,
      }
    });  
  }

  public getUserRated(userId: string) {
    return this.api.send('get', `user/${userId}/rated`, {}, {
      headers: {
        Authorization: `SDC ${this.token}`,
      }
    });  
  }
}