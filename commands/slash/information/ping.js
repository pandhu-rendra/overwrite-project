module.exports = {
    name: "ping",
    type: "interaction",
    prototype: "slash",
    category: "information - slash",
    executeAt: "both",
    usage: "/ping",
    descripton: "Shows the latency of the bot.",
    code: `
    $interactionReply[{newEmbed:{description:**<:ovbping:1271762988801720361> Pong!** $pingms Latency!}{footer:Requested by $userTag[$authorID]:$userAvatar[$authorID]}{timestamp}{color:fd0000}};everyone;false;false]
    $clientTyping
    $reply[$messageID;true]`
}