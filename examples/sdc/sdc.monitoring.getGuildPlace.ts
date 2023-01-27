import { SdcClient } from '../../src';

const sdcClient = new SdcClient(process.env.SDC_TOKEN);

sdcClient.monitoring.getGuildPlace('525360269023641631').then((res) => {
  console.log(res);
})