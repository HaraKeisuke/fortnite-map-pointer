const Discord = require("discord.js");
const client = new Discord.Client();
const token = process.env.token;

const points = [...new Array(16)].map((_, i) => i + 1);

client.on("ready", () => {
  console.log("ready...");
});

client.on("message", (message) => {
  if (message.author.bot) {
    return;
  }
  if (message.content === "/random" || message.content === "/r") {
    message.channel.send("Your Point is...");

    const min = 1;
    const max = 17;
    const point = Math.floor(Math.random() * (max + 1 - min)) + min;
    const attachment = new Discord.MessageAttachment(
      "https://storage.googleapis.com/fortnite-map-pointer/" + point + ".jpg"
    );
    message.channel.send(attachment);

    console.log("New Point", new Date().toLocaleString());
    return;
  }
});
client.login(token);
