const Discord = require ("discord.js")

const NEXT_TIP = 'proxima';

function createTip(tip1, tip2, tip3, result) {
    return {tip1, tip2, tip3, result}
}

const TABLE = [
    createTip("É branco","Tem asas amarelas","Diz emo","Emolga")
];

function init(client, message, content, pontos, tip) {

    console.log(TABLE[content])

    const attachment = new Discord.MessageEmbed();

    attachment.setTitle(`Valendo ${pontos}`);
    attachment.setDescription(`A pista é: ${TABLE[content].tip}`);
    attachment.setColor("#EFC579");
    
    message.channel.send(attachment);

    const pre_init_message_handler = async message => {
        
        if (message.channel !== channel) return;
        
        let { author, content } = message;

        if(author.bot) return;

        content = content.toLowerCase();

        if(content.includes(NEXT_TIP)) {

            if (author === owner) {
                init(pontos-=50, tip+1);
            }

        }
    }
    
    client.on('message', pre_init_message_handler);
}

module.exports = { init }