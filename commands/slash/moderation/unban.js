module.exports = {
    name: "unban",
    type: "interaction",
    prototype: "slash",
    category: "moderation - slash",
    usage: "/unban {user} {reason}",
    description: "UnBans a user from a server.",
    code: `
    $unban[$guildID;$slashOption[user];$slashOption[reason]]
    $interactionReply[
    {newEmbed:
    {title:unBanned}
    {description:
<:ovbmember:1271814702149664800> **unBan:** <@$slashOption[user]>
<:ovbannounce:1272491749826363432> **Reason:** $slashOption[reason]}
    {footer:Moderator $userTag[$authorID]:$userAvatar[$authorID]}
    {timestamp}
    {color:fd0000}
    }]
    $onlyPerms[banmembers;You don't have \`\`Ban Members\`\` permissions!]`
}