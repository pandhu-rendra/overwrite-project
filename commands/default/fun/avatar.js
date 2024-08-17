module.exports = {
    name: "avatar",
    category: "fun - default",
    executeAt: "both",
    usage: "ov?avatar {user}",
    description: "Shows the avatar of a user.",
    code: `
    $description[<@$mentioned[1]>'s Avatar]
    $image[$userAvatar[$mentioned[1]]]
    $footer[Request by $userTag[$authorID];$userAvatar[$authorID]]
    $addTimestamp
    $color[fd0000]
    $reply[$messageID;true]
    $clientTyping`
}