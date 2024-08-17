module.exports = {
    name: "slowmode",
    type: "interaction",
    prototype: "slash",
    category: "moderation - slash",
    usage: "/slowmode {channel} {time}",
    description: "Sets slowmode on a channel",
    code: `
    $slowmode[$slashOption[time];$slashOption[channel]]
    $interactionReply[
    {newEmbed:
    {title:Slowmode}
    {description:
<:ovbfolders:1272185361883332679> **Channel:** <#$slashOption[channel]>
<:ovbtime:1271768460665294872> **Slow time:** $slashOption[time]}
    {footer:Setted by $userTag[$authorID]:$userAvatar[$authorID]}
    {timestamp}
    {color:fd0000}
    }]
    $onlyPerms[managechannels;You don't have \`\`Manage Channels\`\` permissions!]`
}