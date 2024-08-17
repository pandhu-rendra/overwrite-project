module.exports = {
    name: "reboot",
    aliases: ["restart",],
    axecuteAt: "both",
    category: "developer",
    code: `
    $reboot
    $sendMessage[<a:ovbloading:1272024257903329280> **Bot restarted!**]
    $onlyIf[$checkContains[$clientOwnerIDs[,];$authorID]==true;]
    $onlyForIDs[$clientOwnerIDs;You can't use this command because you're not my owner!]
    $reply[$messageID;true]
    $clientTyping`,
}