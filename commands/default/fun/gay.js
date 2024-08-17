module.exports = {
    name: "gay",
    category: "fun - default",
    executeAt: "both",
    usage: "ov?gay {user}",
    description: "Shows the gayness of a user.",
    code: `
    $title[Gayness test]
    $description[<:ovbmember:1271814702149664800> **Name:** <@$mentioned[1]> is $random[0;100]% Gay]
    $footer[Requested by $userTag[$authorID];$userAvatar[$authorID]]
    $addTimestamp
    $color[fd0000]
    $reply[$messageID;true]
    $clientTyping`
}