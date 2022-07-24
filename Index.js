const Discord = require("discord.js");
const client = new Discord.Client({intents: 32767});
const {token} = require("./config.json");
let prefix = process.env.prefix;

client.login(token);

client.once('ready', async()=>{
    console.log("✅ - Estou online!")
})

client.on("messageCreate", (message) => {

    if (message.channel.id === "971505550569390120") {
        
        let emoji_certo = "✔️"
        let emoji_errado = "❌"

        message.react(emoji_certo).catch(e => {})
        message.react(emoji_errado).catch(e => {})

    } else { return; }
});

client.on("message", message => {
    if (message.author.bot) return;
    if (mensage.channel.type == "dm") return;
    if (!message.content.toLowerCase().startsWith(prefix)) return;
    if (!message.content.startsWith(`<@!$client.user.id>`) || message.content.startsWith(`<@!$client.user.id>`)) return;
  
    const args = message.content.trim().slice(prefix.length).split(/ +/g);
    const command = args.shift().toLowerCase();
    try {
      const commandFile = require(`./command/${command}.js`)
      commandFile.run(client, message, arg);
    } catch (err) {
      console.error("Erro" + err);
    }
  });