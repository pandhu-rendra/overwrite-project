module.exports = (client) => {
    client.status({
        name: "OVERWRITE STORE",
        type: "WATCHING",
        status: "idle",
        time: 6,
    });
    
    client.status({
        name: "Made with ❤️&☕",
        type: "PLAYING",
        status: "dnd",
        time: 6,
    });
    
    client.status({
        name: `ov?help | $guildCount Servers`,
        type: "LISTENING",
        status: "online",
        time: 6,
    })
    
    client.status({
        name: "OVERWRITE STORE - MURAH DAN TERPERCAYA",
        type: "CUSTOM",
        status: "idle",
        time: 6,
    })
}
