const Discord = require ("discord.js")

const JOIN_MESSAGE = 'participar';
const INIT_MESSAGE = '!iniciar';
const FINALIZE_MESSAGE = "!finalizar";
const BUY_MESSAGE = 'comprar';
const RECEIVE_MESSAGE = 'receber';
const PASS_MESSAGE = 'passo';

const SECONDS = 5;

function createProperty(status, name, price, image) {
    return {status, name, price, image}
}

const TABLE = [
    createProperty(true,"Cidade de Lumiose", 250 , 'https://cdn2.bulbagarden.net/upload/3/31/Lumiose_City.png'),
    createProperty(true,"Cidade de Pallet", 300  , 'https://cdn2.bulbagarden.net/upload/thumb/d/d3/Professor_Oaks_Laboratory.png/303px-Professor_Oaks_Laboratory.png'),
    createProperty(true,"Cidade de Cerulean", 250 , 'https://cdn2.bulbagarden.net/upload/archive/8/80/20170914155742%21Cerulean_Gym_anime.png'),
    createProperty(true,"Cidade de Lavender", 300 , 'https://cdn2.bulbagarden.net/upload/archive/3/31/20190527190651%21Lavender_Town_anime.png'),
    createProperty(true,"Cidade de Viridian", 200 , 'https://cdn2.bulbagarden.net/upload/archive/9/93/20191012113715%21Viridian_Gym_AG132.png'),
    createProperty(true,"Central Plaza", 500, 'https://cdn2.bulbagarden.net/upload/6/69/Central_Plaza_anime.png'),
    createProperty(true,"Cidade de Castelia", 500, 'https://cdn2.bulbagarden.net/upload/c/c3/Castelia_City_3D.png'),
    createProperty(true,"Floresta Branca", 300, 'https://cdn2.bulbagarden.net/upload/archive/a/a6/20110114045159%21Black_City_and_White_Forest.png'),
    createProperty(true,"Cidade Preta", 300, 'https://cdn2.bulbagarden.net/upload/archive/a/a6/20110114045159%21Black_City_and_White_Forest.png'),
    createProperty(true,"Teatro Musical", 400, 'https://cdn2.bulbagarden.net/upload/archive/3/3a/20111007132448%21Musical_Theater_anime.png'),
    createProperty(true,"Complexo de Virbank", 400, 'https://cdn2.bulbagarden.net/upload/archive/4/4a/20210114202906%21Virbank_Complex_anime.png'),
    createProperty(true,"Estúdios PokéStar", 600, 'https://cdn2.bulbagarden.net/upload/archive/e/e8/20210114201532%21Pok%C3%A9star_Studios_anime.png'),
    createProperty(false,"Prisão", 100, 'https://i.imgur.com/2qPQUKi.png' ),
    createProperty(true,"Ginásio de Nimbasa", 200, 'https://cdn2.bulbagarden.net/upload/f/fe/Nimbasa_Gym_anime.png'),
    createProperty(true,"Ginásio de Azalea", 200, 'https://cdn2.bulbagarden.net/upload/archive/2/28/20210709152609%21Azalea_Gym_anime.png'),
    createProperty(true,"Ginásio de Celadon", 300, 'https://cdn2.bulbagarden.net/upload/thumb/5/5d/Celadon_Gym_anime.png/200px-Celadon_Gym_anime.png' ),
    createProperty(true,"Cidade de Sootopolis", 100, 'https://cdn2.bulbagarden.net/upload/thumb/a/a2/Sootopolis_City_anime.png/250px-Sootopolis_City_anime.png' ),
    createProperty(true,"Torre de Rádio Goldenrod", 100, 'https://cdn2.bulbagarden.net/upload/thumb/f/fd/Radio_Tower_anime.png/226px-Radio_Tower_anime.png' ),
    createProperty(true,"Ginásio de Saffron", 200, 'https://cdn2.bulbagarden.net/upload/thumb/f/f8/Saffron_Gym_anime.png/200px-Saffron_Gym_anime.png' ),
    createProperty(true,"Ginásio de Pewter", 150, 'https://cdn2.bulbagarden.net/upload/thumb/8/8a/Pewter_Gym_anime.png/267px-Pewter_Gym_anime.png' ),
    createProperty(true,"Casa do Brock", 50, 'https://cdn2.bulbagarden.net/upload/thumb/c/c7/Brock_House.png/267px-Brock_House.png'),
    createProperty(true,"Vulcão de Cinnabar", 100, 'https://cdn2.bulbagarden.net/upload/thumb/d/df/Cinnabar_Island_volcano.png/200px-Cinnabar_Island_volcano.png' ),
    createProperty(true,"Favela de Spikemuth", 100, 'https://cdn2.bulbagarden.net/upload/thumb/8/8b/Spikemuth_SwSh.png/300px-Spikemuth_SwSh.png' ),
    createProperty(true,"Casteliacone", 700, 'https://i.imgur.com/oau75tS.png')
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
        attachment.setThumbnail(DICE_FACES[dice]);
    
        let message = channel.send(attachment);
        //setTimeout(()=>{message.delete()}, Math.random() * 10000);
        //setTimeout(()=>{message.edit("Ação feita.")}, 5000);
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
            attachment.setTitle(`Bem-vindo à/ao ${TABLE[property].name}.`);
            attachment.setDescription(`Valor da propriedade é: ${TABLE[property].price}`);
            attachment.setThumbnail(TABLE[property].image);

            let message = await channel.send(attachment);

            let fn = msg => {

                if (msg.channel !== channel) return;
                if (msg.author !== user ) return;

                if (msg.content.toLowerCase().includes(BUY_MESSAGE)) {

                    if(TABLE[property].status == true){

                        if(player.money >= TABLE[player.property].price) {
                            player.money -= TABLE[player.property].price;
                            player.properties.push(player.property);
                            
                            console.log(player.user.username + " tem ["+player.money+"] Tokens e comprou ["+TABLE[player.property].name+"]")
                            const attachment = new Discord.MessageEmbed();
                            attachment.setTitle(`Propriedade '${TABLE[property].name}' comprada por ${player.user.username}`);
                            attachment.setDescription(`Agora você tem um total de ${player.money} Tokens.`)
                            //channel.send(attachment);
                            TABLE[property].status == false;
                            channel.send(attachment);
                        } else {

                        const attachment = new Discord.MessageEmbed();
                        attachment.setTitle('🏦');
                        attachment.setDescription(`Você, ${player.user.username} não tem dinheiro suficiente!`);
                        channel.send(attachment);
                        }
                        
                    }
                    else {
                    const attachment = new Discord.MessageEmbed();
                    attachment.setTitle('🏦');
                    attachment.setDescription(`Propriedade privada!`);
                    channel.send(attachment);
                    }
                    message.delete();
                    client.off('message', fn);
                    nextTurn();
                }

                if (msg.content.toLowerCase().includes(RECEIVE_MESSAGE)) {

                    if (TABLE[player.property].name === "Casteliacone") {
                        player.money += TABLE[player.property].price;

                        const attachment = new Discord.MessageEmbed();
                        attachment.setTitle('🏦');
                        attachment.setDescription(`Você,  ${player.user.username} chegou em ${TABLE[property].name} e recebe ${TABLE[property].price} Tokens! Diga o comando!"`,
                        `\nAgora você tem um total de ${player.money} Tokens.`);
                        channel.send(attachment);
                    }

                    if (TABLE[player.property].name === "Prisão") player.money -= TABLE[player.property].price;

                    message.delete();
                    client.off('message', fn);
                    nextTurn();
                }

                if (msg.content.toLowerCase().includes(FINALIZE_MESSAGE)) {

                    const attachment = new Discord.MessageEmbed();
                    attachment.setTitle('🏦 Banco Imobiliário Finalizado 🏦');
                    for (let index = 0; index < players.length; index++) {
                        const element = players[index];
                        attachment.setDescription(`${players[index].user.username} termina o jogo com um total de ${players[index].money} Tokens e um total de ${players[index].properties.length} propriedades.\n`);
                    }
                    channel.send(attachment);
                    message.delete();
                    client.off('message', fn);
                }

                if (msg.content.toLowerCase().includes(PASS_MESSAGE)) {

                    if (TABLE[player.property].name === "Prisão") player.money -= TABLE[player.property].price;

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

                if (players.length > 0) {
                    
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