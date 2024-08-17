module.exports = {
    name: "emojiList",
    type: "interaction",
    prototype: "button",
    code: `
    $interactionReply[
    {newEmbed:{title:Emoji List [$allEmojisCount]}{description:$guildEmojis[, ;$guildID]}{color:ff0000}};everyone;true;false]`
}