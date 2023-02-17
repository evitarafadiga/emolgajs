const Discord = require("discord.js");
// const { GatewayIntentBits } = require('discord.js');

const client = new Discord.Client({
	// intents: [
	// 	GatewayIntentBits.Guilds,
	// 	GatewayIntentBits.GuildMessages,
	// 	GatewayIntentBits.MessageContent,
	// 	GatewayIntentBits.GuildMembers,
	// ],
});

const config = require("./config.json");

require('./route.js').on(client);

client.login(config.token);