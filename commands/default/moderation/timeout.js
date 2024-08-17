module.exports = {
    name: "timeout",
    category: "moderation - default",
    usage: "ov?timeout {user} {time}",
    description: "Timeout a user on a server",
    code: `
    $timeoutMember[$guildID;$findUser[$mentioned[1;false];false];$noMentionMessage;false]
    $title[Timeout]
    $description[
<:ovbmember:1271814702149664800> **Name:** <@$findUser[$mentioned[1;false];false]>
<:ovbannounce:1272491749826363432> **Reason:** $noMentionMessage]
    $footer[Moderator $userTag[$authorID];$userAvatar[$authorID]]
    $addTimestamp
    $color[fd0000]
    $reply[$messageID;true]
    $clientTyping
    $onlyPerms[moderatemembers;You don't have \`\`Moderate Members\`\` permissions!]`
}