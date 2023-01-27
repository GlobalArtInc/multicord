import { SdcClient } from '../../src';

const sdcClient = new SdcClient('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjgwMDM1NDc1NzI5NzQzODc1MCIsInBlcm1zIjowLCJpYXQiOjE2MzQzMDgwOTh9.5ipb_URRuYLKdrCUEd56aWFyl0FaZZE6DUvkIIJPXRQ');

  sdcClient.bots.stats('800354757297438750', {
    servers: 1402,
  }).then((res) => {
    console.log(res);
  }).catch(err => console.log(err));