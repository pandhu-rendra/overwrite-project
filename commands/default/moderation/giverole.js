module.exports = {
    name: "giverole",
    category: "moderation - default",
    usage: "ov?giverole {user} {role}",
    description: "Give some role to some user.",
    code: `
    $giveRole[$guildID;$mentioned[1];$findRole[$mentionedRoles[1]]]
    $title[Giverole]
    $description[
<:ovbmember:1271814702149664800> **Name:** <@$mentioned[1]>
<:ovbmembers:1271767608495964170> **Gived role:** <@&$findRole[$mentionedRoles[1]]>]
    $footer[Moderator $userTag[$authorID];$userAvatar[$authorID]]
    $addTimestamp
    $color[fd0000]
    $reply[$messageID;true]
    $clientTyping
    $onlyPerms[moderatemembers;You don't have \`\`Moderate Members\`\` permissions!]`
}