const Discord = require ("discord.js")

const Safari = require ("../games/safari.js")

const Banco = require ("../games/banco.js")

const Confess = require ("../commands/confess.js")

const Mysteron = require ("../commands/mysteron.js")

const Estojo = require ("../commands/estojo.js")

const Eclode = require ("../commands/eclode.js")

const prefix = "!"

async function execute(client, message) {

    if(message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const comando = args.shift().toLowerCase();

    if(message.channel.type === "dm") {
        
        if(comando === 'confess') Confess.init(client, message, args);

    } else {
        
        if(comando === 'ping') {
            const m = await message.channel.send("Ping?");
            m.edit(`Pong!! Latência de ${m.createdTimestamp - message.createdTimestamp}ms. A Latência da API é ${Math.round(client.ping)}ms.`);

        }

        if(comando === 'shutdown') {
            console.log('Desligando...')
            client.destroy();
        }

        if(comando === 'safari') Safari.init(client, message, args[0]);

        if(comando === 'banco') Banco.create(client, message.channel, message.author);

        if(comando === 'seique') Mysteron.init(client, message, args);

        if(comando === 'memostra') Estojo.init(client, message, args);

        if(comando === 'eclode') Eclode.init(client, message, args[0]);

        if (message.content === "rip") {
            // Create the attachment using MessageAttachment
            const attachment = new Discord.MessageAttachment('https://i.imgur.com/w3duR07.png');
            // Send the attachment in the message channel with a content
            message.channel.send(`${message.author},`, attachment);
        }
    }
}

module.exports = { execute }