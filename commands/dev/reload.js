module.exports = {
    name: "reload",
    category: "developer",
    executeAt: "both",
    code: `
    $author[Commands has been reloaded;$userAvatar[$clientID]]
    $addField[Commands;
    <:ovbprefix:1272215825352232960> **Prefix:** $commandsCount
    <:ovbtime:1271768460665294872> **Awaited:** $commandsCount[awaited]
    <:ovbtools:1271808216543658047> **Interactions:** $get[interactions]
    <:ovbslash:1272112722833575946> **Slash:** $commandsCount[slash]]
    $addButton[1;Total: $get[total];2;deadcustomid;true]
    $let[total;$sum[$commandsCount;$commandsCount[awaited];$commandsCount[button];$commandsCount[selectMenu];$commandsCount[modal];$commandsCount[slash]]]
    $let[interactions;$sum[$commandsCount[button];$commandsCount[selectMenu];$commandsCount[modal]]]
    $color[fd0000]
    $updateCommands
    $cooldown[5s;Slow down! Don't spam the command!
    Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[5s;user;update;$authorID];$dateStamp];1000]]:R>]
    $onlyForIDs[$clientOwnerIDs;You can't use this command because you're not my owner!]
    $onlyIf[$checkContains[$clientOwnerIDs[,];$authorID]==true;]
    $reply[$messageID;true]
    $clientTyping`
}