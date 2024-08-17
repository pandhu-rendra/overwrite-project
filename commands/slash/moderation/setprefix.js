module.exports = {
    name: "setprefix",
    type: "interaction",
    prototype: "slash",
    category: "moderation - slash",
    usage: "/setprefix {prefix}",
    description: "Set guild prefix for the bot.",
    code: `
    $setGuildVar[prefix;$slashOption[prefix]]
    $interactionReply[
    {newEmbed:
    {title:Setprefix}
    {description:
<:ovbprefix:1272215825352232960> **Prefix:** $slashOption[prefix]}
    {footer:Changed by $userTag[$authorID]:$userAvatar[$authorID]}
    {timestamp}
    {color:fd0000}
    }]
    $onlyPerms[administrator;You don't have \`\`Administrator\`\` permissions!]`
}