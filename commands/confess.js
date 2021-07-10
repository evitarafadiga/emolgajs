const Discord = require("discord.js")

function init (client, message, msg) {

    msg = msg.join (' ').toLowerCase();
    console.log(`AUTOR: ${message.author.username} DIZ[${msg}]`);

    const attachment = new Discord.MessageEmbed();
    attachment.setTitle('📣');
    attachment.setDescription(`${msg}`);
    
    client.channels.cache.forEach(channel => {
        if (channel.isText() && channel.name === 'confess') channel.send(attachment);
    });
}

module.exports = { init }