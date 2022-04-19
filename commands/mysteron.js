const Discord = require("discord.js")

function init (client, message, msg) {

    msg = msg.join (' ').toLowerCase();
    console.log(`AUTOR: ${message.author.username} DIZ[${msg}]`);
    
    let filters = [
                'biscuit é fofoqueira',
                'biscuit é my',
                'biscuit é kpopper',
                'biscuit é baseada na bruna marquezine',
                'biscuit é baseada em bruna marquezine',
                'biscuit é hacker',
                'biscuit é top model',
                'biscuit é modelo',
                'biscuit é ex de american',
                'biscuit é ex-namorada de american',
                'biscuit é procurada',
                'biscuit é foragida'];
    for (let index = 0; index < filters.length; index++) {
        const element = filters[index];
        const attachment = new Discord.MessageEmbed();
        attachment.setTitle(`💎 ${message.author.username} desbloqueou um tesouro escondido💎`);

        if (msg === element) {      
            switch (index) {
                case 0:
                    attachment.setDescription(`Você acaba de receber um Ovo Lutador!`);
                    message.channel.send(attachment);
                    break;
                case 1:
                    attachment.setDescription(`Você acaba de receber um Ovo Normal!`);
                    message.channel.send(attachment);
                    break;
                case 2:
                    attachment.setDescription(`Você acaba de receber um Ovo Fogo! + Pontos Mysteron!`);
                    message.channel.send(attachment);
                    break;
                case 3:
                    attachment.setDescription(`Você acaba de receber um Ovo Gelo! + Pontos Mysteron!`);
                    message.channel.send(attachment);
                    break;
                case 4:
                    attachment.setDescription(`Você e sua família acabam de receber um Ovo Venenoso! + Pontos Mysteron somente para você!`);
                    message.channel.send(attachment);
                    break;
                case 5:
                    attachment.setDescription(`Você e sua família acabam de receber um Ovo Psíquico! + Pontos Mysteron somente para você!`);
                    message.channel.send(attachment);
                    break;
                case 6:
                    attachment.setDescription(`Você acaba de receber um Ovo OU + Pontos Mysteron!`);
                    message.channel.send(attachment);
                    break;
                case 7:
                    attachment.setDescription(`Você acaba de receber 200 Poké-Dollars + Pontos Mysteron!`);
                    message.channel.send(attachment);
                    break;
                case 8:
                    attachment.setDescription(`Você acaba de receber 500 Poké-Dollars + Pontos Mysteron!`);
                    message.channel.send(attachment);
                    break;
                case 9:
                    attachment.setDescription(`Você acaba de receber 1000 Poké-Dollars + Pontos Mysteron!`);
                    message.channel.send(attachment);
                    break;
                case 10:
                    attachment.setDescription(`Você acaba de receber Ovo Uber + Pontos Mysteron!`);
                    message.channel.send(attachment);
                case 11:
                    attachment.setDescription(`Você acaba de receber Ovo Uber + Pontos Mysteron!`);
                    message.channel.send(attachment);
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