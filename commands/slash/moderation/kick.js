module.exports = {
    name: "kick",
    type: "interaction",
    prototype: "slash",
    category: "moderation - slash",
    usage: "/kick {user} {reason}",
    description: "Kick a user from server.",
    code: `
    $kick[$guildID;$slashOption[user];$slashOption[reason]]
    $interactionReply[
    {newEmbed:
    {title:Kicked}
    {description:
<:ovbmember:1271814702149664800> **Kick:** <@$slashOption[user]>
<:ovbannounce:1272491749826363432> **Reason:** $slashOption[reason]}
    {footer:Moderator $userTag[$authorID]:$userAvatar[$authorID]}
    {timestamp}
    {color:fd0000}
    }]
    $onlyPerms[kickmembers;You don't have \`\`Kick Members\`\` permissions!]`
}