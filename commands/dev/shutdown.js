module.exports = {
    name: "shutdown",
    aliases: ["off", "stop"],
    category: "developer",
    executeAt: "both",
    code: `
    $shutdown
    $sendMessage[<a:ovboffline:1272219904036048926> **Bot stopped!**]
    $onlyForIDs[$clientOwnerIDs;You can't use this command because you're not my owner!]
    $onlyIf[$checkContains[$clientOwnerIDs[,];$authorID]==true;]
    $reply[$messageID;true]
    $clientTyping`
}