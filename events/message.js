const Discord = require ("discord.js")

const narratorId = "933145667839328336";

const Safari = require ("../games/safari.js")

const Banco = require ("../games/banco.js")

const Confess = require ("../commands/confess.js")

const Mysteron = require ("../commands/mysteron.js")

const Estojo = require ("../commands/estojo.js")

const Eclode = require ("../commands/eclode.js")

const TiroCerto = require ("../games/tirocerto.js")

const Card = require ("../games/card.js")

const Vouf = require ("../games/vouf.js")

const Banners = require ("../games/banners.js")

const Three = require ("../games/three.js")

const Saldo = require ("../commands/currency.js")

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
        
        if(message.author.id === narratorId) {
            
            if(comando === 'banner') Banners.init(client, message, args);

            if(comando === 'give') Saldo.give(client, message, args);

            if(comando === 'take') Saldo.take(client, message, args);            

            if(comando === 'dorme') {
                console.log('Desligando...')
                client.destroy();
            }

        }        

        if(comando === 'aosafari') Safari.init(client, message, args[0]);

        if(comando === 'aobanco') Banco.create(client, message.channel, message.author);

        if(comando === 'seique') Mysteron.init(client, message, args);

        //if(comando === 'memostra') Estojo.init(client, message, args);

        if(comando === 'tiracarta') Card.init(client, message, args);

        if(comando === 'eclode') Eclode.init(client, message, args[0]);

        if(comando === 'tirocerto') TiroCerto.init(client, message, args);

        if(comando === '3pistas') Three.init(client, message.channel, message.author, args[0]);

        if(comando === 'vouf') Vouf.init(client, message, args[0]);

        if(comando === 'saldo') Saldo.init(client, message, message.author);

        if(comando === 'criaficha') Saldo.register(client, message, message.author);

        if(comando === 'poke') Saldo.poke(client, message, args);

        if(comando === 'ficha') Saldo.stats(client, message, message.author);

        if (message.content === "rip") {
            // Create the attachment using MessageAttachment
            const attachment = new Discord.MessageAttachment('https://i.imgur.com/w3duR07.png');
            // Send the attachment in the message channel with a content
            message.channel.send(`${message.author},`, attachment);
        }
        if (message.content === 'samba') {
            const attachment = new Discord.MessageAttachment('https://imgur.com/7ZLLxBq');
        }
        if (message.content === 'bate') {
            const attachment = new Discord.MessageAttachment('https://imgur.com/ht68XNM');
        }
        if (message.content === 'reclama') {
            const attachment = new Discord.MessageAttachment('https://imgur.com/3POuZQY');
        }
        if (message.content === 'rebola') {
            const attachment = new Discord.MessageAttachment('https://imgur.com/xwHjqu0');
        }
    }
}

module.exports = { execute }