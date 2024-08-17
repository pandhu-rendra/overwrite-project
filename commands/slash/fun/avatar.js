module.exports = {
    name: "avatar",
    type: "interaction",
    prototype: "slash",
    category: "fun - slash",
    executeAt: "both",
    usage: "/avatar{user}",
    description: "Shows the avatar of a user.",
    code: `
    $interactionReply[
    {newEmbed:
    {description:<@$get[option-user]>'s Avatar}
    {image:$userAvatar[$get[option-user]]}
    {footer:Requested by $userTag[$authorID]:$userAvatar[$authorID]}
    {timestamp}
    {color:fd0000}
    }]
    $let[option-user;$replaceText[$replaceText[$checkCondition[$slashOption[user]==];true;$authorID];false;$slashOption[user]]]`
}