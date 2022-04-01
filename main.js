import express from "express";
import http from "http";
const app = express();
let sent = false;
const server = http.createServer(app);
const logs = [];

app.use(express.json());

app.get("/", (req, res) => {
    if (!sent) {
        res.json({
            request_url: "www.casteloalimentos.com.br",
            https: true,
            id: "RANDOM-UUID",
        });
        sent = true;
        return;
    }
    res.status(200).json({
        ok: true,
    });
});

app.get("/reset", (req, res) => {
    sent = false;
    res.status(200).send("RESETD");
});
app.post("/", (req, res) => {
    logs.push(req.body);
    res.status(200).send("OK");
});

server.listen(process.env.PORT || 5000, () => {
    console.log("listening on *:" + (process.env.PORT || 5000));
});
