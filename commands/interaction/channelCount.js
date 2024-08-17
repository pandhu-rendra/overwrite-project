module.exports = {
    name: "channelCount",
    type: "interaction",
    prototype: "button",
    code: `
    $interactionReply[
    {newEmbed:{title:Channel Count [$allChannelsCount]}{description:$guildChannels[$guildID;mention;, ]}{color:ff0000}};everyone;true;false]`
}