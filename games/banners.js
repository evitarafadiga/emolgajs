const Discord = require ("discord.js")

function createBanner(name, image, description) {
    return {name, image, description}
}

const TABLE = [
    createBanner("Breloom está confuso", "https://i.kym-cdn.com/photos/images/newsfeed/001/068/729/fbc.gif", "Não encontrei isso-bree bre!"),
    createBanner("Loja", "https://townsquare.media/site/137/files/2020/01/IMG_20200111_175032.jpg","1 Slot - 200 Poké-Dollars \nOvo Pedra - 100 Poké-Dollars \nOvo Terra - 100 Poké-Dollars"),
    createBanner("Daycare","https://archives.bulbagarden.net/media/upload/c/c3/Breeder_Nursing_TCG.png", "Breed Duplo - 200 Poké-Dollars \nBreed Triplo - 300 Poké-Dollars"),
    createBanner("Lula e Alckmin 13 Líderes de Ginásio","https://i.imgur.com/EbycVEL.png","Basta responder no tópico ordem dos desafios e chamar por LiderDaVez em https://play.pokemonshowdown.com"),
    createBanner("Will Smith Challenger","https://i.imgur.com/SIvPAZi.png","Basta responder no tópico ordem dos desafios e chamar por LiderDaVez em https://play.pokemonshowdown.com"),
    createBanner("Gretchen Fiddlesticks Challenger","https://i.imgur.com/psagJ6u.png", "Basta responder no tópico ordem dos desafios e chamar por LiderDaVez em https://play.pokemonshowdown.com"),
    createBanner("Red Velvet Líderes de Ginásio","https://i.imgur.com/2DXyEN2.png", "Basta responder no tópico ordem dos desafios e chamar por LiderDaVez em https://play.pokemonshowdown.com")
    
];

function init(client, message, question) {

    question = question.toLowerCase();

    if (question > TABLE.length) question = 0;
    
    const attachment = new Discord.MessageEmbed();
    attachment.setTitle(`${TABLE[question].name}`);
    attachment.setImage(`${TABLE[question].image}`);
    attachment.setDescription(`${TABLE[question].description}`);
    attachment.setColor("#EFC579");
    
    message.channel.send(attachment);

}

module.exports = { init }