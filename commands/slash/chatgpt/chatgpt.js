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
    {title:ChatGPT V4}
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
