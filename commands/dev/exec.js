module.exports = {
    name: "execute",
    $if: "old",
    aliases: ["exec"],
    category: "developer",
    executeAt: "both",
    code: `
    $if[$charCount[$exec[$message]]>2000]
    $createFile[$exec[$message];result.txt]
    $else
    \`\`$exec[$message]\`\`
    $endIf
    $onlyIf[$message!=;Send me an terminal command to execute!]
    $onlyIf[$checkContains[$clientOwnerIDs[,];$authorID]==true;]
    $onlyForIDs[$clientOwnerIDs;You can't use this command because you're not my owner!]
    $reply[$messageID;true]
    $clientTyping`
}