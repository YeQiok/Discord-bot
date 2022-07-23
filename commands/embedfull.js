const Discord = require("discord.js");
module.exports = {
    name:"embed full by lui",
    description: "Embed full reação",
    author: "Luis Felipe",

    run: async(message, client, args) =>{
        let usuario = message.author;
        let embedfull = new Discord.MessageEmbed()
        .setAuthor(`Luis Felipe`)
        
        message.channel.send(usuario, embedfull)
    }
}