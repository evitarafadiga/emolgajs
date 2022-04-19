const Discord = require("discord.js")
const Pokedex = require('pokedex-promise-v2');

const P = new Pokedex(/*options*/);

const birds = [ '810', '1', '43', '69', '152', '167', '186', '251', '252', '271', 
                '280', '315', '331', '387', '495', '722', '811', '812', '893',
                '810', '810', '810', '810', '810', '810', '810', '810', '810'];

const POKEMON_AMOUNT = 898;
const SECONDS = 20;
const VIEW = 2;

const getRandomPokemon = () => {
    let id = birds[(Math.random() * birds.length) | 0];
    return P.getPokemonByName(id);   
}

const filter = (response) => {
    if (response.id === 581) return true;
    if (response.id != 581) return "b";
    return false;
}

const apresentOnChat = (response, message) => {

    const attachment = new Discord.MessageEmbed();
    //attachment.setDescription(`Um ${response.name} selvagem apareceu!`);
    attachment.setImage(response.sprites.back_default);
    message.channel.send(/*message.author,*/ attachment);
}

const startCapture = (client, message, onCapture, response, id) => {

    const text_to_validate = "pew";

    const failures = [
        'Por Arceus!!! Isso é crime!',
        'NÃOOOOOOOOOOOOOOOO!',
        `Um jovem ${response.name} não merecia isso...`,
        ':loro:',
        ':pavor:',
        `Eu não acredito nisso... que vergonha!`,
        `Coitadinho do pequeno ${response.name}...`,
        `Sabe que não podia fazer essa lambança, né?`,
        `Arceus guie-o à luz...`,
        `Santa violência!`,
        `Que grosseria!`,
        `Barbaridade.`,
        `Um pobre ${response.name} foi passear...`,
        `Não gente... Não! Não! Não! Não!`,
        `Sem condições de presenciar isso.`,
        `Hoje é um pobre ${response.name}. Amanhã vai atirar... em mim?`,
        `Você vai acertar as contas com Arceus por isso... Eu espero`,
        `:minhafilha:`
    ];

    async function valid(message) {
        
        if(message.author.bot) return;
        if(message.channel.type === "dm") return;
        
        if(!message.content.toLowerCase().includes(text_to_validate)) return;

        const winner = message.author;

        if(id === 810) {        
        message.channel.send(`${winner} você abateu um Grookey febril! Ganha 100 Pontos!`);

        } 
        else {
            let compl = (Math.random() * failures.length) | 0;
            message.channel.send(`${winner} cometeu um abate criminoso e fica sem atirar! ${failures[compl]}`);
        }
        
        /*message.react('🤔');*/
        client.off('message', valid);
        onCapture();
        
    }

    client.on('message', valid);
}

function init(client, message) {
    
    const attachment = new Discord.MessageEmbed();
    attachment.setTitle(`Carregando escopeta... Lembre-se; só é permitido atirar em Grookey`);
    message.channel.send(attachment);

    let amount = 9;
    function fn() {
        if(amount--) {
            setTimeout(function intern_fn() {
                getRandomPokemon()
                .then(response => {
                    if(filter(response)) {
                        apresentOnChat(response, message);
                        //console.log(response.id)
                        startCapture(client, message, fn.bind(null, client, message), response, response.id);
                    }else if (filter(response) === false) {
                        intern_fn();
                    
                    }
                }).catch(console.error);
            }, Math.random() * SECONDS * 1000);
            console.log("Resta(m) "+amount+" Pokémon.")
            return fn;
        } else {
            attachment.setTitle(`Não aparece mais nada no termômetro... Circulando.`);
            message.channel.send(attachment);
        }
    }; fn();

    
}


module.exports = { init }