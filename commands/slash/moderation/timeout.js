module.exports = {
    name: "timeout",
    type: "interaction",
    prototype: "slash",
    category: "moderation - slash",
    usage: "/timeout {user} {time}",
    description: "Timeout a user on a server",
    code: `
    $timeoutMember[$guildID;$slashOption[user];$slashOption[time];false;.]
    $interactionReply[
    {newEmbed:
    {title:Timeout}
    {description:
<:ovbmember:1271814702149664800> **Name:** <@$slashOption[user]>
<:ovbtime:1271768460665294872> **Time:** $slashOption[time]}
    {footer:Moderator $userTag[$authorID]:$userAvatar[$authorID]}
    {timestamp}
    {color:fd0000}
    }]
    $onlyPerms[moderatemembers;You don't have \`\`Moderate Members\`\` permissions!]`
}