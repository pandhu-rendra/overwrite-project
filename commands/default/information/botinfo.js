module.exports = {
    name: "about",
    category: "information - default",
    executeAt: "both",
    usage: "ov?about",
    descripton: "Shows information about the bot its self.",
    code: `
    $author[About the $username[$clientID] bot;$userAvatar[$clientID]]
    $thumbnail[$userAvatar[$clientID]]
    $image[https://media.discordapp.net/attachments/1271999853123211446/1271999954348412979/banner.gif?ex=66b961c5&is=66b81045&hm=0fadf2edc2b0c475d9eb6784a4d00b1a6f736b0741f72fe10f8bbf916bb4305f&=&width=1025&height=59]
    $title[About:]
    $description[
Overwrite Bot is a fully modular Discord bot, allowing you to enable or disable all features and commands according to your preferences
    
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