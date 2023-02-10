function execute(client) {
    console.log(`Bot foi iniciado, com ${client.users.size} usuários, em ${client.channels.size} canais, em ${client.guilds.size} servidores.`);
    // client.user.setGame(`Estou em ${client.guilds.size} servidores.`);
    client.user.setActivity('a raba e sambando miudinho...');
    
}

module.exports = { execute }