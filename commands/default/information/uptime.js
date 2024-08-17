module.exports = {
    name: "uptime",
    executeAt: "both",
    category: "information - default",
    usage: "ov?uptime",
    description: "Show how long bot online",
    code: `
    $description[
**<a:ovbonline:1271826881733328967> Uptime!** $uptime[humanize]]
    $footer[Requested by $userTag[$authorID]:$userAvatar[$authorID]]
    $color[fd0000]
    $addTimestamp
    $reply[$messageID;true]
    $clientTyping`
}