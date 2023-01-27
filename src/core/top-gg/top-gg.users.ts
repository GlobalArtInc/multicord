import { TopGgApi } from "./top-gg.api";
import { TopGgPostStatBody, TopGgSearchBotRequest } from "./top-gg.interface";

export class TopGgUsers {
  constructor(private token: string) {} 
  private api = new TopGgApi();

  async get(userId: string) {
    return this.api.send('get', `users/${userId}`, {}, {
      headers: {
        Authorization: this.token,
      }
    });
  }
}