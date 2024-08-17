module.exports = {
    name: "unban",
    category: "moderation - default",
    usage: "ov?unban {user} {reason}",
    description: "unBans a user from a server.",
    code: `
    $unban[$guildID;$findUser[$mentioned[1;false];false];$noMentionMessage]
    $title[unBanned]
    $description[
<:ovbmember:1271814702149664800> **unBan:** <@$findUser[$mentioned[1;false];false]>
<:ovbannounce:1272491749826363432> **Reason:** $noMentionMessage]
    $footer[Moderator $userTag[$authorID];$userAvatar[$authorID]]
    $addTimestamp
    $color[fd0000]
    $onlyPerms[banmembers;You don't have \`\`Ban Members\`\` permissions!]`
}