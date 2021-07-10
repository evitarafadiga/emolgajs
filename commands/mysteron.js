const Discord = require("discord.js")

function init (client, message, msg) {

    msg = msg.join (' ').toLowerCase();
    console.log(`AUTOR: ${message.author.username} DIZ[${msg}]`);

    let filters = [
                'columbine é vaidosa',
                'columbine é emotiva',
                'columbine matou 13 pessoas',
                'columbine usou uma carabina no massacre',
                'columbine é alérgica a fígado',
                'columbine é admiradora de arte',
                'columbine vai matar quem se casar com ela',
                'columbine vai destruir todos os reinos que encontrar',
                'columbine é filha de jack, o estripador',
                'columbine matou mais que jack, o estripador'];
    for (let index = 0; index < filters.length; index++) {
        const element = filters[index];
        const attachment = new Discord.MessageEmbed();
        attachment.setTitle(`💎 ${message.author.username} desbloqueou um tesouro escondido💎`);

        if (msg === element) {      
            switch (index) {
                case 0:
                    attachment.setDescription(`Você acaba de receber um Ovo Fairy!`);
                    message.channel.send(attachment);
                    break;
                case 1:
                    attachment.setDescription(`Você acaba de receber um Ovo Dragon!`);
                    message.channel.send(attachment);
                    break;
                case 2:
                    attachment.setDescription(`Você acaba de receber um Ovo UU!`);
                    message.channel.send(attachment);
                    break;
                case 3:
                    attachment.setDescription(`Você acaba de receber um Ovo OU!`);
                    message.channel.send(attachment);
                    break;
                case 4:
                    attachment.setDescription(`Você acaba de receber um Ovo Raro!`);
                    message.channel.send(attachment);
                    break;
                case 5:
                    attachment.setDescription(`Você acaba de receber um Ovo Uber + Fita Mysteron!`);
                    message.channel.send(attachment);
                    break;
                case 6:
                    attachment.setDescription(`Você acaba de receber um Ovo Uber + Fita Mysteron!`);
                    message.channel.send(attachment);
                    break;
                case 7:
                    attachment.setDescription(`Você acaba de receber 2000 Tokens + Fita Mysteron!`);
                    message.channel.send(attachment);
                    break;
                case 8:
                    attachment.setDescription(`Você acaba de receber 5000 Tokens + Fita Mysteron!`);
                    message.channel.send(attachment);
                    break;
                case 9:
                    attachment.setDescription(`Você acaba de receber 5000 Tokens + Fita Mysteron!`);
                    message.channel.send(attachment);
                    break;
                default:
                    break;
            }
        }
    }
    
    /*
    const attachment = new Discord.MessageEmbed();
    attachment.setTitle('📣 CONFESSO 📣');
    attachment.setDescription(`${msg}`);
    
    
    client.channels.cache.forEach(channel => {
        if (channel.isText() && channel.name === 'confess') channel.send(attachment);
    }); */
}

module.exports = { init }