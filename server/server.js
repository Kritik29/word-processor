const io = require('socket.io')(3001, {
    cors: {
        origin: "http://localhost:3000/word-processor",
        methods: ['GET', 'POST'],
    }
})

io.on("connection", socket => {
    console.log("connected");
})