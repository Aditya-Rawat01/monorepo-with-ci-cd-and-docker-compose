import { prismaClient } from "db/client";

Bun.serve({
    port:8081,
    fetch(req,server) {
        if (server.upgrade(req)) {
            return;
        }
        return new Response("Upgrade Failed",{status:500})
    },
    websocket: {
        open(ws) {
            ws.send("hello")
        },
        async message(ws, message) {
            await prismaClient.user.create({
                data:{
                    username:Math.random().toString(),
                    value:Math.random().toString()
                }
            })
            ws.send(message)
        }
    }
})