module.exports = {
    name: "poll",
    type: "interaction",
    prototype: "slash",
    category: "utility - slash",
    usage: "/poll {question} {time}",
    description: "Creates a poll",
    code: `
    $createPoll[$channelID;$slashOption[question];$slashOption[time];false;Yes:$customEmoji[ovbcheck;$guildID];No:$customEmoji[ovbx;$guildID]]`
}