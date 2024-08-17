module.exports = {
    name: "chat",
    category: "chatgpt - default",
    usage: "ov?chat {question}",
    description: "Chat with ChatGPT",
    code: `
    $title[ChatGPT V4]
    $description[
    **Prompt :** 
    - $message

    **Response :**
    $jsonRequest[https://api.kastg.xyz/api/ai/chatgptV4?prompt=$uri[$message];result[0].response;$nonEscape[Sorry, I could not load the requested response.]]]
    $footer[Powered by chatGPT V4;$userAvatar[$clientID]]
    $addTimestamp
    $color[fd0000]
    $reply[$messageID;true]
    $clientTyping`
}
