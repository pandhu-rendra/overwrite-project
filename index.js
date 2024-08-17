require("dotenv").config();
const { AoiClient, LoadCommands, Util } = require("aoi.js");
const db = require("./src/database.js");
const { parse, createAst } = require("@akarui/aoi.parser");
const { parseExtraOptions } = require("@akarui/aoi.parser/components");

// Parser
Util.parsers.ErrorHandler = parse;
Util.ErrorHandler = (err, message) => {
    console.error(err);
    message.channel.send(`An error occurred: ${err.message}`);
}
Util.parsers.OptionsParser = (data) => {
    return createAst(data).children.map(parseExtraOptions);
}

const client = new AoiClient({
    token: process.env.TOKEN,
    prefix: ["your_prefix"],
    intents: ["MessageContent", "Guilds", "GuildMessages", "DirectMessages", "GuildMembers"],
    events: ["onMessage", "onInteractionCreate", "onJoin", "onLeave"],
    disableFunctions: ["$clientToken", "$setClientAvatar"],
    shardCount: 2,
    mobilePlatform: false,
    aoiAutoUpdate: true,
    aoiWarning: true,
    aoiLogs: true,
    debug: false,
    suppressAllErrors: false, /**Use this if you don't want get error messages on your discord bot ( Default: false - you can set to true to enable this features) */
    database: {
        type: "aoi.db",
        db: require("@aoijs/aoi.db"),
        dbType: "KeyValue",
        tables: ["main"],
        path: "./database",
        securityKey: process.env.DBsecurityKey,
    }
});

// Handler
const loader = new LoadCommands(client);
loader.load(client.cmd, "./commands/");
require('./src/handler/variables.js')(client)
require('./src/handler/status.js')(client)
require('./src/handler/antiCrash.js')(client)

// Ready event 
client.readyCommand({
    channel: "$getVar[readyChannel]",
    code: `
    $channelSendMessage[$getVar[readyChannel];<a:ovbonline:1271826881733328967> <@$clientID> Starting]`
})

// Welcome & leave
client.joinCommand({
    channel: "1238926744384176240",
    code: `
    $author[$username[$authorID];$userAvatar[$authorID]]
    $title[Welcome]
    $description[
Selamat datang <@$authorID> di **$guildName[$guildID]**

> **<a:ovannouncements:1261718012990455918> Jangan lupa untuk membaca terms of services kita**
> <#your_tos_/_rules_channel_id>

> **User IDs**
> <@$authorID> ($authorID)
> **#BE A SMART BUYER**]
    $image[your_custom_welcome_image]
    $footer[$guildName[$guildID];$guildIcon[$guildID]]
    $addTimestamp
    $color[fd0000]`
})

client.leaveCommand({
    channel: "1238926859509698620",
    code: `
    $author[$username[$authorID];$userAvatar[$authorID]]
    $title[Goodbye]
    $description[
Selamat tinggal <@$authorID>, ku kira hubungan mu dengan **$guildName[$guildID]** spesial]
    $image[your_custom_goodbye_image]
    $footer[$guildName[$guildID];$guildIcon[$guildID]]
    $addTimestamp
    $color[fd0000]`
})

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
