import express from "express";
import http from "http";
const app = express();
let sent = false;
const server = http.createServer(app);

app.use(express.json());

app.get("/", (req, res) => {
    if (!sent) {
        console.log("Sent");
        res.json({
            request_url: "www.casteloalimentos.com.br",
            https: true,
            id: "RANDOM-UUID",
        });
        sent = true;
        return;
    }
    res.status(200).send("OK");
});

app.post("/", (req, res) => {
    console.log(req.body);
    console.log(req.headers);
    res.status(200).send();
});

server.listen(3000, () => {
    console.log("listening on *:3000");
});
