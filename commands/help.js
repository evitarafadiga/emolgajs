const Discord = require ("discord.js")

function init(client, message) {

    const attachment = new Discord.MessageEmbed();
    
    attachment.setTitle(`Quack!`);
    attachment.setThumbnail(`${"https://play.pokemonshowdown.com/sprites/xyani/quaquaval.gif"}`);
    attachment.setDescription(`**Guia de uso do Quaquaval BOT**

    Use sempre exclamação (!) antes dos comandos.
    
    !criaficha -> Para criar a sua ficha (é importante que seu nome no discord e seu apelido no servidor sejam idênticos, senão haverá falha)

    !ficha -> Para visualizar sua ficha.

    !badge + emoji da insígnia -> Para adicionar uma insígnia de Líder de Ginásio. Ex: !badge :fire:
    
    !poke + nome do pokémon + nome do pokémon... -> Para adicionar um pokémon na sua ficha. Ex: !poke magikarp gyarados
    
    !unpoke + número -> Para remover o(s) último(s) pokémon da ficha. Ex: !unpoke 2

    !saldo -> Para consultar seu saldo de Tokens.`);
    attachment.setColor('#288BA8');
    message.channel.send(attachment);

}

module.exports = { init }