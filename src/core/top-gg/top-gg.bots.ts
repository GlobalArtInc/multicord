import { TopGgApi } from "./top-gg.api";
import { TopGgPostStatBody, TopGgSearchBotRequest } from "./top-gg.interface";

export class TopGgBots {
  constructor(private token: string) {} 
  private api = new TopGgApi();

  public async search(searchData: TopGgSearchBotRequest) {
    return this.api.send('get', 'bots', searchData, {
      headers: {
        Authorization: this.token,
      }
    });
  }

  public async find(botId: string) {
    return this.api.send('get', `bots/${botId}`, {}, {
      headers: {
        Authorization: this.token,
      }
    });
  }

  public async stats(botId: string) {
    return this.api.send('get', `bots/${botId}/stats`, {}, {
      headers: {
        Authorization: this.token,
      }
    });
  }

  public async postStats(botId: string, postData: TopGgPostStatBody) {
    return this.api.send('post', `bots/${botId}/stats`, postData, {
      headers: {
        Authorization: this.token,
      }
    });
  }
}