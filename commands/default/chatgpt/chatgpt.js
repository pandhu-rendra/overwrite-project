module.exports = {
    name: "chat",
    category: "chatgpt - default",
    usage: "ov?chat {question}",
    description: "Chat with ChatGPT",
    code: `
    $title[<:ov1:1274319108678221948><:ov2:1274319128869601374><:ov3:1274319146636677132><:ov4:1274319164567322657><:ov5:1274319180560207944><:ov6:1274319204379660360><:ov7:1274319231953014814><:ov8:1274319249753509899>]
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