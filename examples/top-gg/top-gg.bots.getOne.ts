import { TopGgClient } from '../../src';

const topGgClient = new TopGgClient('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjgyOTIyOTU4NzI2NjUzNTQzNCIsImJvdCI6dHJ1ZSwiaWF0IjoxNjc0ODQwMzQwfQ.hVSRHPdgxlHPlSU_JEQuejGpdkkAwF0rB_eEdYErAW8');

topGgClient.bots.find("829229587266535434").then((res) => {
  console.log(res)
})