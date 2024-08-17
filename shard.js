const { ClientShard } = require("aoi.js");

const sharder = new ClientShard("./index.js", {
    token: process.env.TOKEN,
    totalShards: 3,
    shardList: "auto",
});

sharder.on("shardCreate", (shard) => console.log(`Launched shard ${shard.id}`));
sharder.startProcess();
