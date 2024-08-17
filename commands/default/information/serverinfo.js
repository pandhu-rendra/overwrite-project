module.exports = {
    name: "serverinfo",
    category: "information - default",
    usage: "ov?serverinfo",
    description: "Shows information about the server",
    code: `
    $title[$guildName[$guildID]]
    $description[
<:ovbinfo:1271805131750641686> **ID:** $guildID
<:ovbcrown:1271805722384011346> **Owner:** <@$guildOwnerID[$guildID]>
<:ovbtime:1271768460665294872> **Created Date:** $creationDate[$guildID;date]
    
<:ovbmembers:1271767608495964170> **Members Count**
\`\`$membersCount[$guildID;all;true]\`\`
    
<a:ovbboost:1271813548938362911> **Server Boost**
$guildBoostCount[$guildID] Boost (\`\`Level $guildBoostLevel[$guildID]\`\`)
    
<:ovbmember:1271814702149664800> **Roles Count**
\`\`$roleCount[$guildID;true]\`\`]
    $addButton[1;Emoji list;danger;emojiList;false;<:ovbemoji:1272184579788116009>]
    $addButton[1;Channel Count;danger;channelCount;false;<:ovbfolders:1272185361883332679>]
    $footer[Requested by $userTag[$authorID];$userAvatar[$authorID]]
    $color[fd0000]
    $reply[$messageID;true]
    $clientTyping`
}