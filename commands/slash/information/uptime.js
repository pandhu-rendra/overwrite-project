module.exports = {
    name: "uptime",
    type: "interaction",
    prototype: "slash",
    category: "information - slash",
    executeAt: "both",
    usage: "/uptime",
    description: "Show how long bot online",
    code: `
    $interactionReply[{newEmbed:{description:<a:ovbonline:1271826881733328967> **Uptime!** $uptime[humanize]}{footer:Requested by $userTag[$authorID]:$userAvatar[$authorID]}{timestamp}{color:fd0000}}]`
}