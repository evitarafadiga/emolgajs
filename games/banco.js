const Discord = require ("discord.js")

const JOIN_MESSAGE = 'participar';
const INIT_MESSAGE = '!iniciar';
const BUY_MESSAGE = 'comprar';

const SECONDS = 5;

function createProperty(name, price, image) {
    return {name, price, image}
}

const TABLE = [
    createProperty("Cidade de Lumiose", 6000 , 'https://cdn2.bulbagarden.net/upload/3/31/Lumiose_City.png'),
    createProperty("Cidade de Pallet", 1000  , 'https://cdn2.bulbagarden.net/upload/thumb/d/d3/Professor_Oaks_Laboratory.png/303px-Professor_Oaks_Laboratory.png'),
    createProperty("Cidade de Cerulean", 700 , 'https://cdn2.bulbagarden.net/upload/archive/8/80/20170914155742%21Cerulean_Gym_anime.png'),
    createProperty("Cidade de Lavender", 600 , 'https://cdn2.bulbagarden.net/upload/archive/3/31/20190527190651%21Lavender_Town_anime.png'),
    createProperty("Cidade de Viridian", 1100 , 'https://cdn2.bulbagarden.net/upload/archive/9/93/20191012113715%21Viridian_Gym_AG132.png'),
    createProperty("Central Plaza", 4000, 'https://cdn2.bulbagarden.net/upload/6/69/Central_Plaza_anime.png'),
    createProperty("Cidade de Castelia", 1600, 'https://cdn2.bulbagarden.net/upload/c/c3/Castelia_City_3D.png'),
    createProperty("Casteliacone", 1200, 'https://i.imgur.com/oau75tS.png'),
    createProperty("Floresta Branca", 600, 'https://cdn2.bulbagarden.net/upload/archive/a/a6/20110114045159%21Black_City_and_White_Forest.png'),
    createProperty("Cidade Preta", 600, 'https://cdn2.bulbagarden.net/upload/archive/a/a6/20110114045159%21Black_City_and_White_Forest.png'),
    createProperty("Teatro Musical", 2000, 'https://cdn2.bulbagarden.net/upload/archive/3/3a/20111007132448%21Musical_Theater_anime.png'),
    createProperty("Complexo de Virbank", 1400, 'https://cdn2.bulbagarden.net/upload/archive/4/4a/20210114202906%21Virbank_Complex_anime.png'),
    createProperty("Estúdios PokéStar", 2000, 'https://cdn2.bulbagarden.net/upload/archive/e/e8/20210114201532%21Pok%C3%A9star_Studios_anime.png'),
    createProperty("Ginásio de Nimbasa", 3000, 'https://cdn2.bulbagarden.net/upload/f/fe/Nimbasa_Gym_anime.png'),
    createProperty("Casteliacone", 1200, 'https://i.imgur.com/oau75tS.png')
];

const DICE_FACES = [
    'https://i.imgur.com/67d39gm.png',
    'https://i.imgur.com/wN8ESGL.png',
    'https://i.imgur.com/Tz9ms0p.png',
    'https://i.imgur.com/FVc1tuG.png',
    'https://i.imgur.com/HzvQucC.png',
    'https://i.imgur.com/LmXBRZM.png'
];

const rollDice = () => {
    return Math.floor (Math.random() * 6);
}

function create(client, channel, owner) {

    const players = [];
    let player_turn = 0;
    
    const showDice = (username, dice) => {
        const attachment = new Discord.MessageEmbed();
        attachment.setTitle(`O jogador ${username} jogou o dado!`);
        attachment.setDescription(`O dado rolou o número ${dice + 1}!!!`)
        attachment.setImage(DICE_FACES[dice]);
    
        let message = await channel.send(attachment);
        setTimeout(()=>{message.delete()}, 3000);
    }

    const addPlayer = user => {
        
        if (players.some(player => player.user === user)) {
            const attachment = new Discord.MessageEmbed();
            attachment.setTitle(`Você, ${user.username} já está no jogo!`);
            channel.send(attachment);
            
            return;
        }
        
        players.push({user, money: 1200, properties: [], property: 0});

        const attachment = new Discord.MessageEmbed();
        attachment.setTitle(`O jogador ${user.username} se conectou ao game!`);
        channel.send(attachment);
    }
    
    const nextTurn = async () => {
        
        const player = players[player_turn];
        player_turn = ++player_turn % players.length;

        let dice = rollDice();

        player.property = (player.property + dice + 1) % TABLE.length;

        let {user, money, properties, property} = player;

        showDice(user.username, dice);

        { // property message
            const attachment = new Discord.MessageEmbed();
            attachment.setTitle(`Bem-vindo a/ao ${TABLE[property].name}.`);
            attachment.setDescription(`Valor da propriedade é: ${TABLE[property].price}`);
            attachment.setImage(TABLE[property].image);

            let message = await channel.send(attachment);

            let fn = msg => {

                if (msg.channel !== channel) return;
                if (msg.author !== user ) return;

                if (msg.content.toLowerCase().includes(BUY_MESSAGE)) {

                    message.delete();
                    client.off('message', fn);
                    nextTurn();
                }
            }

            client.on('message', fn);
        }
    }
 
    const attachment = new Discord.MessageEmbed();
    attachment.setTitle(`Digite '${JOIN_MESSAGE}' para entrar na partida!`);
    channel.send(attachment);

    const pre_init_message_handler = async message => {

        if (message.channel !== channel) return;
        
        let { author, content } = message;

        if(author.bot) return;

        content = content.toLowerCase();

        if(content.includes(JOIN_MESSAGE)) {

            addPlayer(author);

        } else if (content.includes(INIT_MESSAGE)) {

            if (author === owner) {

                if (players.length > 1) {
                    
                    client.off('message', pre_init_message_handler);
                    nextTurn();

                } else {

                    const attachment = new Discord.MessageEmbed();
                    attachment.setTitle('Jogadores insuficientes! Duh.');
                    channel.send(attachment);
    
                }

            } else {

                const attachment = new Discord.MessageEmbed();
                attachment.setTitle('Você não pode iniciar o jogo!');
                channel.send(attachment);

            }

        }
    }

    client.on('message', pre_init_message_handler);

    addPlayer(owner);
}

module.exports = { create }