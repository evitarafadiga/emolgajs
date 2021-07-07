const Discord = require("discord.js")

function init (client, message, msg) {

    console.log(`AUTOR: ${message.author.username} DIZ[${msg}]`)

    msg = msg.join (' ').toLowerCase();

    const attachment = new Discord.MessageEmbed();
    attachment.setTitle('📣 CONFESSO 📣');
    attachment.setDescription(`${msg}`);
    
    client.channels.fetch('862396986376323082')
    .then(channel => channel.send(attachment));
}

module.exports = { init }