const Discord = require("discord.js");
const client = new Discord.Client({intents: 32767});
const {token} = require("./config.json");

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

