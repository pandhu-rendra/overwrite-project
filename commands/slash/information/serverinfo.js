module.exports = {
    name: "serverinfo",
    type: "interaction",
    prototype: "slash",
    category: "information - slash",
    usage: "/serverinfo",
    description: "Shows information about the server.",
    code: `
    $interactionReply[
    {newEmbed:
    {title:$guildName[$guildID]}
    {thumbnail:$guildIcon[$guildID]}
    {description:
<:ovbinfo:1271805131750641686> **ID:** $guildID
<:ovbcrown:1271805722384011346> **Owner:** <@$guildOwnerID[$guildID]>
<:ovbtime:1271768460665294872> **Created Date:** $creationDate[$guildID;date]
    
<:ovbmembers:1271767608495964170> **Members Count**
\`\`$membersCount[$guildID;all;true]\`\`
    
<a:ovbboost:1271813548938362911> **Server Boost**
$guildBoostCount[$guildID] Boost (\`\`Level $guildBoostLevel[$guildID]\`\`)
    
<:ovbmember:1271814702149664800> **Roles Count**
\`\`$roleCount[$guildID;true]\`\`}
    {footer:Requested by $userTag[$authorID]:$userAvatar[$authorID]}
    {timestamp}
    {color:fd0000}
    }
    {actionRow:{button:Emoji List:danger:emojiList:false:$customEmoji[ovbemoji;$guildID] }{button:Channel Count:danger:channelCount:false:$customEmoji[ovbfolders;$guildID] }}]`
}