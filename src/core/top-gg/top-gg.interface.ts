import { Snowflake } from "discord.js";

export interface TopGgSearchBotRequest {
  limit?: number;
  offset?: number;
  search?: string;
  sort?: string;
  fields?: string;
}

export interface TopGgSearchBotzResponse {
  result: TopGgBotStructure[];
  limit: number;
  offset: number;
  count: number;
  total: number;
}

export interface TopGgPostStatBody {
  server_count: number | number[];
  shards?: number[];
  shard_id?: number;
  shard_count?: number;
}

export interface TopGgBotStatsResponse {
  server_count: number;
  shards: string[];
  shard_count?: number;
}

export interface TopGgBotStructure {
  id: string;
  username: string;
  discriminator: string;
  avatar?: string;
  defAvatar: string;
  prefix: string;
  shortdesc: string;
  longdesc?: string;
  tags: string[];
  website?: string;
  support?: string;
  github?: string;
  owners: Snowflake[];
  guilds: Snowflake[];
  invite?: string;
  date: string;
  server_count?: number;
}