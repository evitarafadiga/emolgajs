const Discord = require ("discord.js")

function createBanner(name, image, description) {
    return {name, image, description}
}

const TABLE = [
    createBanner("Emolga está confuso", "https://64.media.tumblr.com/1a9d15c6015b2e24795e452da0fa9137/68714dddac07d3c7-2e/s500x750/a4fc638584e08d0dc31f0cb6847d38282fcd86d0.gifv", "Não encontrei isso-emo!"),
    createBanner("Loja", "https://i.imgur.com/cjavbH2.png","1 Slot - 200 Poké-Dollars \nOvo Pedra - 100 Poké-Dollars \nOvo Lutador - 100 Poké-Dollars \nOvo OU - 150 Poké-Dollars (PROMOÇÃO 50% OFF)"),
    createBanner("Daycare","https://i.imgur.com/Pxj4D30.png", "Breed Duplo - 200 Poké-Dollars \nBreed Triplo - 300 Poké-Dollars"),
    createBanner("Copa Coração Partido","https://i.imgur.com/VARc5PO.png","Torneio 3x3, National Dex AG, Dynamax e Gigantamax inclusos."),
    createBanner("Copa Coração Inteiro","https://i.imgur.com/zXKnu6c.png","Torneio full-party, National Dex AG, Dynamax e Gigantamax inclusos."),
    createBanner("Maria José Cururu Líder de Ginásio","https://i.imgur.com/d18dtHs.png","Basta responder no tópico ordem dos desafios e chamar por LiderDaVez em https://play.pokemonshowdown.com"),
    createBanner("Neuma Moura Líder de Ginásio","https://i.imgur.com/XU7YGIF.png","Basta responder no tópico ordem dos desafios e chamar por LiderDaVez em https://play.pokemonshowdown.com"),
    createBanner("Casimiro Miguel Líder de Ginásio","https://i.imgur.com/4lyg0In.png", "Basta responder no tópico ordem dos desafios e chamar por LiderDaVez em https://play.pokemonshowdown.com"),
    createBanner("Doutora Deolane Líder de Ginásio","https://i.imgur.com/cUm43Vl.png", "Basta responder no tópico ordem dos desafios e chamar por LiderDaVez em https://play.pokemonshowdown.com"),
    createBanner("Glória Groove Líder de Ginásio","https://i.imgur.com/8BnER1A.png", "Basta responder no tópico ordem dos desafios e chamar por LiderDaVez em https://play.pokemonshowdown.com"),
    //createBanner("Juliette Líder de Ginásio","https://i.imgur.com/0JqMWpF.png", "Basta responder no tópico ordem dos desafios e chamar por LiderDaVez em https://play.pokemonshowdown.com")
    
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