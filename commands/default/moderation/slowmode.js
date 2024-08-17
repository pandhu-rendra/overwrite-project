module.exports = {
    name: "slowmode",
    category: "moderation - default",
    usage: "ov?slowmode {channel} {time}",
    description: "Sets slowmode on a channel",
    code: `
    $slowmode[$message;$channelID]
    $title[Slowmode]
    $description[
<:ovbfolders:1272185361883332679> **Channel:** <#$channelID>
<:ovbtime:1271768460665294872> **Slow time:** $message]
    $footer[Setted by $userTag[$authorID];$userAvatar[$authorID]]
    $addTimestamp
    $color[fd0000]
    $onlyPerms[managechannels;You don't have \`\`Manage Channels\`\` permissions!]`
}