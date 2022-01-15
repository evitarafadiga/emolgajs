const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

require('./route.js').on(client);
/*
client.on('ready', async () => {
    console.log('Mongodb está pronto!')
    
    await mongo().then(mongoose => {
        try {
            console.log('Conectado ao mongo!')
        } catch(e) {
            console.log('Erro de conexão')
        } finally {
            mongoose.connection.close()
        }
    }) 
}) 
 
client.on("ready", () => {
    const channel = client.channels.cache.get("867938770354335795");
    if (!channel) return console.error("The channel does not exist!");
    channel.join().then(connection => {
        // Yay, it worked!
        console.log("Successfully connected.");
    }).catch(e => {

        // Oh no, it errored! Let's log it to console :)
        console.error(e);
    });

    
});
*/
client.login(config.token);