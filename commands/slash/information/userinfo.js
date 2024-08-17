module.exports = {
    name: "userinfo",
    type: "interaction",
    prototype: "slash",
    category: "information - slash",
    executeAt: "both",
    usage: "/userinfo {user}",
    description: "Shows information about a user.",
    code: `
    $interactionReply[
    {newEmbed:
    {author:About the $username[$get[option]]:$userAvatar[$get[option]]}
    {thumbnail:$userAvatar[$get[option]]}
    {description:
<:ovbcrown:1271805722384011346> **Name:** <@$get[option]>
<:ovbinfo:1271805131750641686> **ID:** $get[option]

<:ovbtime:1271768460665294872> **Created Date:** \`\`$creationDate[$get[option];date]\`\`
<:ovbtime:1271768460665294872> **Join Date:** \`\`$parseDate[$memberJoinDate[$get[option];$guildID]]\`\`

<a:ovbboost:1271813548938362911> **Server Boost:** $isBoosting[$get[option];$guildID]

<:ovbmember:1271814702149664800> **Roles ($userRolesCount[$get[option];$guildID])**
$userRoles[$get[option];$guildID;mention;, ]}
    {footer:Requested by $userTag[$authorID]:$userAvatar[$authorID]}
    {timestamp}
    {color:fd0000}
    }]
    $let[option;$replaceText[$replaceText[$checkCondition[$slashOption[user]==];true;$authorID];false;$slashOption[user]]]`
}