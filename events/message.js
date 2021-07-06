const Discord = require ("discord.js")

const Safari = require ("../games/safari.js")
const SafariLc = require ("../games/safarilittlecup.js")
const SafariNfe = require ("../games/safarinotfullyevolved.js")
const SafariUber = require ("../games/safariuber.js")
const SafariWater = require ("../games/safariwater.js")
const SafariFire = require ("../games/safarifire.js")
const SafariGrass = require ("../games/safarigrass.js")

const prefix = "!"

async function execute(client, message) {

    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const comando = args.shift().toLowerCase();

    if(comando === "ping") {
        const m = await message.channel.send("Ping?");
        m.edit(`Pong! Latência de ${m.createdTimestamp - message.createdTimestamp}ms. A Latência da API é ${Math.round(client.ping)}ms.`);

    }

    if(comando === "shutdown") {
        console.log(`Desligando...`)
        client.destroy();
    }

    if(comando === "safarilc") SafariLc.init(client, message);

    if(comando === "safarinfe") SafariNfe.init(client, message);

    if(comando === "safariuber") SafariUber.init(client, message);

    if(comando === "safari") Safari.init(client, message);

    if(comando === "safariwater") SafariWater.init(client, message);

    if(comando === "safarifire") SafariFire.init(client, message);

    if(comando === "safarigrass") SafariGrass.init(client, message);

    if (message.content === "rip") {
        // Create the attachment using MessageAttachment
        const attachment = new Discord.MessageAttachment('https://i.imgur.com/w3duR07.png');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author},`, attachment);
    }
}

module.exports = { execute }