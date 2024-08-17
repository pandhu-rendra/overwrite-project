module.exports = {
    name: "delrole",
    category: "moderation - default",
    usage: "ov?delrole {user} {role}",
    description: "Delete some role from some user.",
    code: `
    $removeRole[$guildID;$mentioned[1];$roleID[$mentionedRoles[1]]]
    $title[Remove role from user]
    $description[
<:ovbmember:1271814702149664800> **Name:** <@$mentioned[1]>
<:ovbmembers:1271767608495964170> **Removed role:** <@&$roleID[$mentionedRoles[1]]>]
    $footer[Moderator $userTag[$authorID];$userAvatar[$authorID]]
    $addTimestamp
    $color[fd0000]
    $reply[$messageID;true]
    $clientTyping
    $onlyPerms[moderatemembers;You don't have \`\`Moderate Members\`\` permissions!]`
}