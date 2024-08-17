module.exports = {
    name: "delrole",
    type: "interaction",
    prototype: "slash",
    category: "moderation - slash",
    usage: "/delrole {user} {role}",
    description: "Delete some role from some user.",
    code: `
    $removeRole[$guildID;$slashOption[user];$slashOption[role]]
    $interactionReply[
    {newEmbed:
    {title:Remove role from user}
    {description:
<:ovbmember:1271814702149664800> **Name:** <@$slashOption[user]>
<:ovbmembers:1271767608495964170> **Removed role:** <@&$slashOption[role]>}
    {footer:Moderator $userTag[$authorID]:$userAvatar[$authorID]}
    {timestamp}
    {color:fd0000}
    }]
    $onlyPerms[moderatemembers;You don't have \`\`Moderate Members\`\` permissions!]`
}