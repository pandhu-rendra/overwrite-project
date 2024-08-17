module.exports = (client) => {
    client.status({
        name: "STATUS 1",
        type: "WATCHING",
        status: "idle",
        time: 6,
    });
    
    client.status({
        name: "STATUS 2",
        type: "PLAYING",
        status: "dnd",
        time: 6,
    });
    
    client.status({
        name: `STATUS 3`,
        type: "LISTENING",
        status: "online",
        time: 6,
    })
    
    client.status({
        name: "STATUS 4",
        type: "CUSTOM",
        status: "idle",
        time: 6,
    })
}
