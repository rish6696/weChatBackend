const socket=io(window.location.origin);

socket.on('connect',()=>{
    console.log('connected successfully with socket id'+socket.id);
    socket.emit('JOIN_CHAT',{
        sender:'sender_3_id',
        reciever:'reciever_3_id'
    })
})