const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

require('./route.js').on(client);

client.login(config.token);