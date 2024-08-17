module.exports = {
    name: "create-option",
    code: `
    $createApplicationCommand[global;chat;Chat with ChatGPT4;true;true;slash;[{
    "name": "prompt",
    "description": "Prompt for ChatGPT4",
    "required": true,
    "type": 3
}]]`
}

// module.exports = {
//     name: "create-option",
//     code: `
//     $createApplicationCommand[global;poll;Creates a poll.;true;true;slash;[{
//     "name": "question",
//     "description": "poll question",
//     "required": true,
//     "type": 3
// },{
//     "name": "time",
//     "description": "...",
//     "required": true,
//     "type": 3
// }]]`
// }