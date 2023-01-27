import { Client } from "discord.js";
import { SdcApi } from "./sdc.api";
import { SdcStats } from "./sdc.interface";

export class SdcBots {
  private api = new SdcApi();
  constructor(private token: string) {

  }

  private async sendStats(client: Client) {
    await client.guilds.fetch();
    const servers = client.guilds.cache.size;
    const shards = client.shard.count ?? 1;
    const data: SdcStats = {
      servers,
      shards,
    }

    return this.api.send('post', `bots/${client.user.id}/stats`, data, {
      headers: {
        Authorization: `SDC ${this.token}`,
      }
    });
  }

  public async autoPost(client: Client) {
    this.sendStats(client);
    setInterval(() => this.sendStats(client), 900000);
  }

  public async stats(botId: string, data: Partial<SdcStats>) {
    data = Object.assign({
      servers: 0,
      shards: 1,
    }, data);

    return this.api.send('post', `bots/${botId}/stats`, data, {
      headers: {
        Authorization: `SDC ${this.token}`,
      }
    });  
  }
}