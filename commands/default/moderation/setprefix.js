module.exports = {
    name: "setprefix",
    category: "moderation - default",
    usage: ["ov?setprefix {prefix}"],
    description: "Set guild prefix for the bot.",
    code: `
    $setGuildVar[prefix;$message]
    $title[Setprefix]
    $description[
<:ovbprefix:1272215825352232960> **Prefix:** $message]
    $footer[Changed by $userTag[$authorID];$$userAvatar[$authorID]]`
}
