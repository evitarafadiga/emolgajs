function execute(client) {
    console.log(`Bot foi iniciado, com ${client.users.size} usuários, em ${client.channels.size} canais, em ${client.guilds.size} servidores.`);
    /*client.user.setGame(`Estou em ${client.guilds.size} servidores.`);
    client.user.setActivity('Sobrevoando os Reinos...');*/
}

module.exports = { execute }