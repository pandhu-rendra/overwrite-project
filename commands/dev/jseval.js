module.exports = {
    name: "jseval",
    aliases: ["jse", "jev"],
    category: "developer",
    executeAt: "both",
    code: `
    $djsEval[$message]
    $onlyIf[$message!=;You need to evaluate something.]
    $onlyIf[$checkContains[$clientOwnerIDs[,];$authorID]==true;]
    $onlyForIDs[$clientOwnerIDs;You can't use this command because you're not my owner!]
    $reply[$messageID;true]
    $clientTyping`
}