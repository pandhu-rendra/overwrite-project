module.exports = {
    name: "gay",
    type: "interaction",
    prototype: "slash",
    executeAt: "both",
    category: "fun - slash",
    usage: "/gay {user}",
    description: "Shows the gayness of a user.",
    code: `
    $interactionReply[
    {newEmbed:
    {title:Gayness test}
    {description:<:ovbmember:1271814702149664800> **Name:** <@$get[option-user]> is $random[0;100]% Gay}
    {footer:Requested by $userTag[$authorID]:$userAvatar[$authorID]}
    {timestamp}
    {color:fd0000}
    }]
    $let[option-user;$replaceText[$replaceText[$checkCondition[$slashOption[user]==];true;$authorID];false;$slashOption[user]]]`
}