import { SdcClient } from '../../src';

const sdcClient = new SdcClient(process.env.SDC_TOKEN);

sdcClient.bots.stats('800354757297438750', {
  servers: 1,
}).then((res) => {
  console.log(res);
})