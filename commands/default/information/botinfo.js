module.exports = {
    name: "about",
    category: "information - default",
    executeAt: "both",
    usage: "ov?about",
    descripton: "Shows information about the bot its self.",
    code: `
    $author[About the $username[$clientID] bot;$userAvatar[$clientID]]
    $thumbnail[$userAvatar[$clientID]]
    $image[YOUR_IMAGE_LINK]
    $title[About:]
    $description[
Bot information
    
**Information**
<:ovbdevs:1271764942302871623> **Developer:** <@$clientOwnerIDs>
<:ovbjs:1271765862034178059> **Node.js:** $nodeVersion
<:ovbfolder:1271765987565244427> **Library:** [Aoi.js $packageVersion](https://aoi.js.org)
<:ovbtime:1271768460665294872> **Uptime:** $uptime[humanize]
<:ovbprefix:1272215825352232960> **Prefix:** ov?
<:ovbslash:1272112722833575946> **Slash:** /

**Statistic**
<:ovbserver:1271767406309801984> **Servers:** $guildCount
<:ovbmembers:1271767608495964170> **Members:** $allMembersCount
<:ovbshard:1271766705718296677> **Shards:**
<:ovbping:1271762988801720361> **Ping:** $pingms
<:ovbcloud:1271769455596408854> **RAM Usage:** $truncate[$ram] MB
<:ovblol:1271775701976092749> **CPU Usage:** $truncate[$cpu[os]]%

**Links**
<:ovbsetting:1271791009063370862> **Support Server:** [Click me](https://discord.gg)
<:ovbgalaxy:1271780772013150249> **Invite:** [Click me]($getClientInvite[administrator])
<:ovbgithub:1271789557708492832> **Github:** [Click me](https://github.com)]
    $footer[Thank you for using $username[$clientID];$userAvatar[$clientID]]
    $color[fd0000]
    $reply[$messageID;true]
    $clientTyping`
}
