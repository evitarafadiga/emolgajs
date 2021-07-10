const Discord = require("discord.js")

function init (client, message, msg) {

    msg = msg.join (' ').toLowerCase();

    let filters = [
        'estojo padrão',
        'estojo azul',
        'estojo rosa',
        'estojo vermelho',
        'carimbo dedo-duro',
        'fita observador',
        'fita atirador',
        'fita banqueiro',
        'fita guerras civis',
        'fita mysteron',
        'insígnia bobos',
        'insígnia carvão',
        'insígnia engrenagem',
        'insígnia lâmina',
        'insígnia medo',
        'insígnia pedregulho',
        'insígnia quasimundo',
        'insígnia reis e rainhas',
        'insígnia trovão',
        'insígnia versailles',
        'ovo de ho-oh bronze',
        'ovo de ho-oh prata',
        'ovo de ho-oh ouro',
        'taça bronze',
        'taça prata',
        'taça ouro',
        'troféu quasimundo bronze',
        'troféu quasimundo prata',
        'troféu quasimundo ouro'];

    for (let index = 0; index < filters.length; index++) {
        const element = filters[index];
        const attachment = new Discord.MessageEmbed();
        attachment.setTitle(`Mostrando: ${filters[index]}`);

        if (msg === element) {      
            switch (index) {
                case 0:
                    attachment.setThumbnail('https://i.imgur.com/pRYC412.png');
                    attachment.setURL('https://i.imgur.com/pRYC412.png');
                    message.channel.send(attachment);
                    break;
                case 1:
                    attachment.setThumbnail('https://i.imgur.com/WZz8CoC.png');
                    attachment.setURL('https://i.imgur.com/WZz8CoC.png');
                    message.channel.send(attachment);
                    break;
                case 2:
                    attachment.setThumbnail('https://i.imgur.com/Mcd8DJU.png');
                    attachment.setURL('https://i.imgur.com/Mcd8DJU.png');
                    message.channel.send(attachment);
                    break;
                case 3:
                    attachment.setThumbnail('https://i.imgur.com/e0bqTx7.png');
                    attachment.setURL('https://i.imgur.com/e0bqTx7.png');
                    message.channel.send(attachment);
                    break;
                case 4:
                    attachment.setThumbnail('https://i.imgur.com/YstlveM.png');
                    attachment.setURL('https://i.imgur.com/YstlveM.png');
                    message.channel.send(attachment);
                    break;
                case 5:
                    attachment.setThumbnail('https://i.imgur.com/1IBQhVA.png');
                    attachment.setURL('https://i.imgur.com/1IBQhVA.png');
                    message.channel.send(attachment);
                    break;
                case 6:
                    attachment.setThumbnail('https://i.imgur.com/RBnrv40.png');
                    attachment.setURL('https://i.imgur.com/RBnrv40.png');
                    message.channel.send(attachment);
                    break;
                case 7:
                    attachment.setThumbnail('https://i.imgur.com/QdLGhhj.png');
                    attachment.setURL('https://i.imgur.com/QdLGhhj.png');
                    message.channel.send(attachment);
                    break;
                case 8:
                    attachment.setThumbnail('https://i.imgur.com/JEmUf4Q.png');
                    attachment.setURL('https://i.imgur.com/JEmUf4Q.png');
                    message.channel.send(attachment);
                    break;
                case 9:
                    attachment.setThumbnail('https://i.imgur.com/hEyN9oY.png');
                    attachment.setURL('https://i.imgur.com/hEyN9oY.png');
                    message.channel.send(attachment);
                    break;
                case 10:
                    attachment.setThumbnail('https://i.imgur.com/mazlDTw.png');
                    attachment.setURL('https://i.imgur.com/mazlDTw.png');
                    message.channel.send(attachment);
                    break;
                case 11:
                    attachment.setThumbnail('https://i.imgur.com/DEx8C4h.png');
                    attachment.setURL('https://i.imgur.com/DEx8C4h.png');
                    message.channel.send(attachment);
                    break;
                case 12:
                    attachment.setThumbnail('https://i.imgur.com/nMQIrwh.png');
                    attachment.setURL('https://i.imgur.com/nMQIrwh.png');
                    message.channel.send(attachment);
                    break;
                case 13:
                    attachment.setThumbnail('https://i.imgur.com/0oMCdev.png');
                    attachment.setURL('https://i.imgur.com/0oMCdev.png');
                    message.channel.send(attachment);
                    break;
                case 14:
                    attachment.setThumbnail('https://i.imgur.com/PTEePAu.png');
                    attachment.setURL('https://i.imgur.com/PTEePAu.png');
                    message.channel.send(attachment);
                    break;
                case 15:
                    attachment.setThumbnail('https://i.imgur.com/VoaojR4.png');
                    attachment.setURL('https://i.imgur.com/VoaojR4.png');
                    message.channel.send(attachment);
                    break;
                case 16:
                    attachment.setThumbnail('https://i.imgur.com/BLV9G92.png');
                    attachment.setURL('https://i.imgur.com/BLV9G92.png');
                    message.channel.send(attachment);
                    break;
                case 17:
                    attachment.setThumbnail('https://i.imgur.com/1TjhqLs.png');
                    attachment.setURL('https://i.imgur.com/1TjhqLs.png');
                    message.channel.send(attachment);
                    break;
                case 18:
                    attachment.setThumbnail('https://i.imgur.com/5QjICxr.png');
                    attachment.setURL('https://i.imgur.com/5QjICxr.png');
                    message.channel.send(attachment);
                    break;
                case 19:
                    attachment.setThumbnail('https://i.imgur.com/5R5PMMh.png');
                    attachment.setURL('https://i.imgur.com/5R5PMMh.png');
                    message.channel.send(attachment);
                    break;
                case 20:
                    attachment.setThumbnail('https://i.imgur.com/sLo555u.png');
                    attachment.setURL('https://i.imgur.com/sLo555u.png');
                    message.channel.send(attachment);
                    break;
                case 21:
                    attachment.setThumbnail('https://i.imgur.com/ngi9zVJ.png');
                    attachment.setURL('https://i.imgur.com/ngi9zVJ.png');
                    message.channel.send(attachment);
                    break;
                case 22:
                    attachment.setThumbnail('https://i.imgur.com/OZzbG1Y.png');
                    attachment.setURL('https://i.imgur.com/OZzbG1Y.png');
                    message.channel.send(attachment);
                    break;
                case 23:
                    attachment.setThumbnail('https://i.imgur.com/odTIKUd.png');
                    attachment.setURL('https://i.imgur.com/odTIKUd.png');
                    message.channel.send(attachment);
                    break;
                case 24:
                    attachment.setThumbnail('https://i.imgur.com/odTIKUd.png');
                    attachment.setURL('https://i.imgur.com/odTIKUd.png');
                    message.channel.send(attachment);
                    break;
                case 25:
                    attachment.setThumbnail('https://i.imgur.com/AQVwYD0.png');
                    attachment.setURL('https://i.imgur.com/AQVwYD0.png');
                    message.channel.send(attachment);
                    break;
                case 26:
                    attachment.setThumbnail('https://i.imgur.com/kHMKNnR.png');
                    attachment.setURL('https://i.imgur.com/kHMKNnR.png');
                    message.channel.send(attachment);
                    break;
                case 27:
                    attachment.setThumbnail('https://i.imgur.com/pHGfcqA.png');
                    attachment.setURL('https://i.imgur.com/pHGfcqA.png');
                    message.channel.send(attachment);
                    break;
                case 28:
                    attachment.setThumbnail('https://i.imgur.com/CPhsjB2.png');
                    attachment.setURL('https://i.imgur.com/CPhsjB2.png');
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