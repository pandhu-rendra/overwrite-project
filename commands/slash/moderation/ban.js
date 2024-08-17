module.exports = {
    name: "ban",
    type: "interaction",
    prototype: "slash",
    category: "moderation - slash",
    usage: "/ban {user} {reason}",
    description: "Bans a user from server.",
    code: `
    $ban[$guildId;$slashOption[user];7;$slashOption[reason]]
    $interactionReply[
    {newEmbed:
    {title:Banned}
    {description:
<:ovbmember:1271814702149664800> **Banned:** <@$slashOption[user]>
<:ovbannounce:1272491749826363432> **Reason:** $slashOption[reason]}
    {footer:Moderator $userTag[$authorID]:$userAvatar[$authorID]}
    {timestamp}
    {color:fd0000}
    }]
    $onlyPerms[banmembers;You don't have \`\`Ban Members\`\` permissions!]`
}