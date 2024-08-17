module.exports = {
    name: "meme",
    category: "fun - default",
    executeAt: "both",
    usage: "ov?meme",
    description: "Get a random meme from internet",
    code: `
    $title[Random meme]
    $image[$jsonRequest[https://api.imgflip.com/get_memes;data.memes[$random[0;99]].url]]
    $footer[Requested by $userTag$authorID;$userAvatar[$authorID]]
    $addTimestamp
    $color[fd0000]
    $reply[$messageID;true]
    $clientTyping`
}