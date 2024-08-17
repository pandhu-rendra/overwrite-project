module.exports = {
    name: "userinfo",
    axecuteAt: "both",
    category: "information - default",
    usage: "ov?userinfo {user}",
    description: "Shows information about a user.",
    code: `
    $author[About the $username[$mentioned[$message]];$userAvatar[$mentioned[$message]]]
    $thumbnail[$userAvatar[$mentioned[$message]]]
    $description[
<:ovbcrown:1271805722384011346> **Name:** $username[$mentioned[$message]]
<:ovbinfo:1271805131750641686> **ID:** $mentioned[$message]

<:ovbtime:1271768460665294872> **Created Date:** \`\`$creationDate[$mentioned[$message];date]\`\`
<:ovbtime:1271768460665294872> **Join Date:** \`\`$parseDate[$memberJoinDate[$mentioned[$message];$guildID]]\`\`

<a:ovbboost:1271813548938362911> **Server Boost:** $isBoosting[$mentioned[$message];$guildID]

<:ovbmember:1271814702149664800> **Roles ($userRolesCount[$mentioned[$message];$guildID])**
$userRoles[$mentioned[$message];$guildID;mention;, ]]
    $footer[Requsted by $userTag[$authorID];$userAvatar[$authorID]]
    $addTimestamp
    $color[fd0000]
    $reply[$messageID;true]
    $clientTyping`
}