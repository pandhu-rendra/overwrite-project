const { KeyValue, CacheType } = require("@aoijs/aoi.db");
const redis = require("redis");

const client = redis.createClient({
    host: "localhost",
    port: 6379,
})

const db = new KeyValue({
    dataConfig: {path: "../database"},
    encryptionConfig: {
        encriptData: false,
        securityKey: process.env.DBsecurityKey,
    },
    cacheConfig: {
        type: CacheType.Redis,
        client: client,
    },
    debug: true,
});

db.on("ready", () => {
    console.log("Database is ready!");
});

db.connect();

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
