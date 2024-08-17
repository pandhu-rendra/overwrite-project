module.exports = {
    name: "kick",
    category: "moderation - default",
    usage: "ov?kick {user} {reason}",
    description: "Kick a user from server.",
    code: `
    $kick[$guildID;$findUser[$mentioned[1;false];false];$noMentionMessage]
    $title[Kicked]
    $description[
<:ovbmember:1271814702149664800> **Kick:** <@$findUser[$mentioned[1;false];false]>
<:ovbannounce:1272491749826363432> **Reason:** $noMentionMessage]
    $footer[Moderator $userTag[$authorID];$userAvatar[$authorID]]
    $addTimestamp
    $color[fd0000]
    $reply[$messageID;true]
    $clientTyping
    $onlyPerms[kickmembers;You don't have \`\`Kick Members\`\` permissions!]`
}