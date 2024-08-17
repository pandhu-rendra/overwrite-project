module.exports = {
    name: "ban",
    category: "moderation - default",
    usage: "ov?ban {user} {reason}",
    description: "Bans a user from server.",
    code: `
    $ban[$guildID;$findUser[$mentioned[1;false];false];7d;$noMentionMessage]
    $title[Banned]
    $description[
<:ovbmember:1271814702149664800> **Banned:** <@$findUser[$mentioned[1;false];false]>
<:ovbannounce:1272491749826363432> **Reason:** $noMentionMessage]
    $footer[Moderator $userTag[$authorID];$userAvatar[$authorID]]
    $addTimestamp
    $color[fd0000]
    $reply[$messageID;true]
    $clientTyping
    $onlyPerms[banmembers;You don't have \`\`Ban Members\`\` permissions!]`
}