# SDC API
```typescript
import { SdcClient } from '@globalart/multicord';

const sdcClient = new SdcClient(process.env.SDC_TOKEN);
```

# Bots
### Publish the bot stats
```typescript
sdcClient.bots.stats('botId', {
  servers: 1,
}).then((res) => {
  console.log(res);
});
```
### Autopublish the bot stats
```typescript
sdcClient.bots.autoPost(client: DiscordJSClient).then((res) => {
  console.log(res);
});
```

# Monitoring
### Get guild by ID
```typescript
sdcClient.monitoring.getGuild('525360269023641631').then((res) => {
  console.log(res);
})
```
### Geting the users whose votes for the guild
```typescript
sdcClient.monitoring.getGuildRated('525360269023641631').then((res) => {
  console.log(res);
})
```
### Get guild place in the monitoring
```typescript
sdcClient.monitoring.getGuildPlace('525360269023641631').then((res) => {
  console.log(res);
})
```