module.exports = {
    name: "poll",
    category: "utility - default",
    usage: "ov?poll {question} {time}",
    description: "Creates a poll",
    code: `
    $createPoll[$channelID;$message[1];$message[2];false;Yes:$customEmoji[ovbcheck;$guildID];No:$customEmoji[ovbx;$guildID]]
    $reply[$messageID;true]
    $clientTyping`
}