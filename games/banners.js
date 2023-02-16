const Discord = require ("discord.js")

function createBanner(name, image, description) {
    return {name, image, description}
}

const TABLE_SHOP = [
    createBanner("Loja", "https://townsquare.media/site/137/files/2020/01/IMG_20200111_175032.jpg",
    "Ovo Dragão - 100 Tokens \n"+
    "Ovo Lutador - 100 Tokens \n"+
    "Ovo Pedra - 60 Tokens \n"+
    "Ovo Terra - 40 Tokens\n"+
    "Ovo Grama - 40 Tokens\n"+
    "Ovo Elétrico - 40 Tokens"),
    createBanner("Loja", "https://townsquare.media/site/137/files/2020/01/IMG_20200111_175032.jpg",
    "Ovo Fada - 100 Tokens \n"+
    "Ovo Fantasma - 100 Tokens \n"+
    "Ovo Água - 60 Tokens \n"+
    "Ovo Fogo - 40 Tokens\n"+
    "Ovo Gelo - 40 Tokens\n"+
    "Ovo Venenoso - 40 Tokens"),
    createBanner("Loja", "https://townsquare.media/site/137/files/2020/01/IMG_20200111_175032.jpg",
    "Ovo Desejo - 200 Tokens \n"+
    "Ovo OU - 100 Tokens \n"+
    "Ovo Sombrio - 60 Tokens \n"+
    "Ovo Metal - 60 Tokens\n"+
    "Ovo Normal - 40 Tokens"),
    createBanner("Loja", "https://townsquare.media/site/137/files/2020/01/IMG_20200111_175032.jpg",    
    "Ovo Desejo - 200 Tokens\n"+
    "Pão com Mortadela - 1 Token")
    
];

const TABLE_LEADER = [
    createBanner("Jamie Lee Curtis - Líder de Ginásio", "https://media.discordapp.net/attachments/720721289702146231/1067544896581402714/ENuuFxD.gif", "Procure por LiderDaVez em https://play.pokemonshowdown.com/"),
    createBanner("Lia Khey - Líder de Ginásio", "https://i.imgur.com/aRss6Vs.gif", "Procure por LiderDaVez em https://play.pokemonshowdown.com/"),
    createBanner("Gloria Maria - Líder de Ginásio", "https://i.imgur.com/OWUoVPC.gif", "Procure por LiderDaVez em https://play.pokemonshowdown.com/"),
    createBanner("Ivy Moraes - Líder de Ginásio", "https://i.imgur.com/K3CgZSI.gif", "Procure por LiderDaVez em https://play.pokemonshowdown.com/"),
    
];

const TABLE_DAYCARE = [
    createBanner("Daycare","https://archives.bulbagarden.net/media/upload/c/c3/Breeder_Nursing_TCG.png", "Breed de Casal - 200 Tokens \nBreed Trisal - 300 Tokens"),
    createBanner("Daycare","https://archives.bulbagarden.net/media/upload/c/c3/Breeder_Nursing_TCG.png", "Breed de Casal - 150 Tokens \nBreed Trisal - 200 Tokens"),
    createBanner("Daycare","https://archives.bulbagarden.net/media/upload/c/c3/Breeder_Nursing_TCG.png", "Breed Solo (Mitose) - 300 Tokens"),
    
];

const TABLE = [
    createBanner("Quack?!", "https://play.pokemonshowdown.com/sprites/xyani/quaquaval.gif", "4 Lojas, 4 Líderes de Ginásio e 3 Daycares...")    
];

function init(client, message, category) {
    
    let num = parseInt(category[category.length-1], 10);        
    category.splice(1);
    category = category[0].toLowerCase();

    const attachment = new Discord.MessageEmbed();

    switch(category) {
        case ("loja"):
            
            if (num > TABLE_SHOP.length) num = 0;

            attachment.setTitle(`${TABLE_SHOP[num].name}`);
            attachment.setImage(`${TABLE_SHOP[num].image}`);
            attachment.setThumbnail(`${TABLE[0].image}`);
            attachment.setDescription(`${TABLE_SHOP[num].description}`);
            attachment.setColor('#288BA8');
            message.channel.send(attachment);            

            break;
        case ("lider"):

            if (num > TABLE_LEADER.length) num = 0;

            attachment.setTitle(`${TABLE_LEADER[num].name}`);
            attachment.setImage(`${TABLE_LEADER[num].image}`);
            attachment.setThumbnail(`${TABLE[0].image}`);
            attachment.setDescription(`${TABLE_LEADER[num].description}`);
            attachment.setColor('#288BA8');
            message.channel.send(attachment);

            break;
        case ("daycare"):

            if (num > TABLE_DAYCARE.length) num = 0;

            attachment.setTitle(`${TABLE_DAYCARE[num].name}`);
            attachment.setImage(`${TABLE_DAYCARE[num].image}`);
            attachment.setThumbnail(`${TABLE[0].image}`);
            attachment.setDescription(`${TABLE_DAYCARE[num].description}`);
            attachment.setColor('#288BA8');
            message.channel.send(attachment);

            break;
        default:       
            
            if (num >= TABLE.length) num = 0;

            attachment.setTitle(`${TABLE[num].name}`);
            attachment.setThumbnail(`${TABLE[0].image}`);
            attachment.setDescription(`${TABLE[num].description}`);
            attachment.setColor('#288BA8');
            message.channel.send(attachment);
            break;
    }  

}

module.exports = { init }