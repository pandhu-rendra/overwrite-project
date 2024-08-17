module.exports = {
    name: "ping",
    executeAt: "both",
    category: "information - default",
    usage: "ov?ping",
    description: "Shows the latency of the bot.",
    code: `
    $description[
**<:ovbping:1271762988801720361> Pong!** $pingms Latency!]
    $footer[Request by $userTag[$authorID];$userAvatar[$authorID]]
    $color[fd0000]
    $addTimestamp
    $reply[$messageID;true]
    $clientTyping`
}