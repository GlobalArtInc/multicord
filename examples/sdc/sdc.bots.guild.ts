import { SdcClient } from '../../src';

const sdcClient = new SdcClient(process.env.SDC_TOKEN);

sdcClient.bots.stats('525360269023641631', {
  servers: 1,
}).then((res) => {
  console.log(res);
})