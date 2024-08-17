module.exports = {
    name: "meme",
    type: "interaction",
    prototype: "slash",
    category: "fun - slash",
    usage: "/meme",
    description: "Get a random meme from internet",
    code: `
    $interactionReply[
    {newEmbed:
    {title:Random meme}
    {image:$jsonRequest[https://api.imgflip.com/get_memes;data.memes[$random[0;99]].url]}
    {footer:Requested by $userTag[$authorID]:$userAvatar[$authorID]}
    {timestamp}
    {color:fd0000}
    }]`
}