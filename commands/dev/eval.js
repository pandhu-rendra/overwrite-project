module.exports = {
    name: "eval",
    aliases: ["ev"],
    category: "developer",
    executeAt: "both",
    code: `
    $eval[$message]
    $onlyIf[$checkContains[$message;clientToken]==false;]
    $onlyIf[$message!=;Send me an eval command to evaluate!]
    $onlyIf[$checkContains[$clientOwnerIDs[,];$authorID]==true;]
    $onlyForIDs[$clientOwnerIDs;You can't use this command because you're not my owner!]
    $reply[$messageID;true]
    $clientTyping`
}