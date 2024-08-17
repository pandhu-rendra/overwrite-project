const { ClientShard } = require("aoi.js");

const sharder = new ClientShard("./index.js", {
    // Your main file, in this case called "index.js".
    token: process.env.TOKEN, // Your Discord Bot token.
    totalShards: 3, // The amount of shards/instances you want to create, in this case three.
    shardList: "auto",
});

sharder.on("shardCreate", (shard) => console.log(`Launched shard ${shard.id}`));
sharder.startProcess();

/**
╔═╗╦  ╦╔═╗╦═╗╦ ╦╦═╗╦╔╦╗╔═╗  ╔═╗╔╦╗╔═╗╦═╗╔═╗
║ ║╚╗╔╝║╣ ╠╦╝║║║╠╦╝║ ║ ║╣   ╚═╗ ║ ║ ║╠╦╝║╣ 
╚═╝ ╚╝ ╚═╝╩╚═╚╩╝╩╚═╩ ╩ ╚═╝  ╚═╝ ╩ ╚═╝╩╚═╚═╝
 
@info
Source code by | Overwrite store
@info
Source code id | OVERWRITE BOT
@info
Perhatian      | Credit & Watermark jangan diremove | hilangkan!
@info
*/
