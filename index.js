// const express = require("express");
// const next = require("next");

// const port = parseInt(process.env.PORT, 10) || 3000;
// const dev = process.env.NODE_ENV !== "production";
// const app = next({ dev });
// const handle = app.getRequestHandler();

// app.prepare().then(() => {
//   const server = express();

//   server.get("/a", (req, res) => {
//     return app.render(req, res, "/a", req.query);
//   });

//   server.get("/b", (req, res) => {
//     return app.render(req, res, "/b", req.query);
//   });

//   server.all("*", (req, res) => {
//     return handle(req, res);
//   });

//   server.listen(port, (err) => {
//     if (err) throw err;
//     console.log(`> Ready on http://localhost:${port}`);
//   });
// });

const Discord = require("discord.js");
const client = new Discord.Client();
const token = "NzUwMzQyOTE1MjY3NDkzOTQ5.X05JSw.ZJSqVkasFWnlfEpMctFM0UCk4Y0";

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
  if (message.content === "/ramdom" || message.content === "/r") {
    message.channel
      .send("Your Point is...", {
        file: "/" + Math.floor(Math.random(n)) + "jpg",
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
