module.exports = {
    name: "giverole",
    type: "interaction",
    prototype: "slash",
    category: "moderation - slash",
    usage: "/giverole {user} {role}",
    description: "Give some role to some user.",
    code: `
    $giveRole[$guildID;$slashOption[user];$slashOption[role]]
    $interactionReply[
    {newEmbed:
    {title:Giverole}
    {description:
<:ovbmember:1271814702149664800> **Name:** <@$slashOption[user]>
<:ovbmembers:1271767608495964170> **Gived role:** <@&$slashOption[role]>}
    {footer:Moderator $userTag[$authorID]:$userAvatar[$authorID]}
    {timestamp}
    {color:fd0000}
    }]
    $onlyPerms[moderatemembers;You don't have \`\`Moderate Members\`\` permissions!]`
}