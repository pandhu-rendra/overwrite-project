module.exports = {
    name: "chat",
    type: "interaction",
    prototype: "slash",
    category: "chatgpt - slash",
    usage: "/chat {question}",
    description: "Chat with chatGPT",
    code: `
    $interactionReply[
    {newEmbed:
    {title:<:ov1:1274319108678221948><:ov2:1274319128869601374><:ov3:1274319146636677132><:ov4:1274319164567322657><:ov5:1274319180560207944><:ov6:1274319204379660360><:ov7:1274319231953014814><:ov8:1274319249753509899>}
    {description:
**Prompt :**
- $slashOption[prompt]

**Response :**
$jsonRequest[https://api.kastg.xyz/api/ai/chatgptV4?prompt=$uri[$slashOption[prompt]];result[0].response]}
    {footer:Powered by chatGPT V4:$userAvatar[$clientID]}
    {timestamp}
    {color:fd0000}
    }]`
}