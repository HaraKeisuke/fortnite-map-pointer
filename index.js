const express = require("express");
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";

const server = express();

server.get("/", (req, res) => {
  return res.status(200).end();
});

server.listen(port, (err) => {
  if (err) throw err;
  console.log(`> Ready on http://localhost:${port}`);
});

const Discord = require("discord.js");
const client = new Discord.Client();
const token = process.env.token;

const points = [...new Array(16)].map((_, i) => i + 1);

client.on("ready", () => {
  console.log("ready...");
});
//Bot自身の発言を無視する呪い
client.on("message", (message) => {
  if (message.author.bot) {
    return;
  }
  //↓ここに後述のコードをコピペする↓
  if (message.content === "/random" || message.content === "/r") {
    message.channel
      .send("Your Point is...", {
        file: "/" + Math.floor(Math.random(points.length)) + "jpg",
      })
      .catch(console.error);
    return;
  }
  if (message.content.match(/discord.gg/)) {
    message.delete(100);
  }
  //↑ここに後述のコードをコピペする↑
});
client.login(token);
