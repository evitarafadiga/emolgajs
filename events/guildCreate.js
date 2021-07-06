function execute(client) {
    console.log(`O bot entrou no(s) servidor(es): ${guild.name} (id: ${guild.id}). População: ${guild.memberCount} membros!`);
    client.user.setActivity(`Estou em ${client.guilds.size} servidores.`)
}

module.exports = { execute }