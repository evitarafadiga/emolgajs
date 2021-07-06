const Discord = require("discord.js")
const Pokedex = require('pokedex-promise-v2');

/*let options = {
  protocol: 'https',
  hostName: 'localhost:443',
  versionPath: '/api/v2/',
  cacheLimit: 100 * 1000, // 100s
  timeout: 5 * 1000 // 5s
}*/
const P = new Pokedex(/*options*/);
const POKEMON_AMOUNT = 898;
const SECONDS = 40;

const getRandomPokemon = () => {
    let id = (Math.random() * POKEMON_AMOUNT) | 0;
    return P.getPokemonByName(id);
}

const apresentOnChat = (response, message) => {

    const attachment = new Discord.MessageEmbed();
    attachment.setDescription(`Um ${response.name} selvagem apareceu!`);
    attachment.setImage(response.sprites.front_default);
    message.channel.send(/*message.author,*/ attachment);
}

const startCapture = (client, message, onCapture) => {

    const text_to_validate = "peguei";
    async function valid(message) {
        
        if(message.author.bot) return;
        if(message.channel.type === "dm") return;

        if(!message.content.toLowerCase().includes(text_to_validate)) return;
        
        const winner = message.author;
        message.channel.send(`${winner} você pegou :D`);
        /*message.react('🤔');*/
        client.off('message', valid);
        onCapture();
    }

    client.on('message', valid);
}

function init(client, message, safari_type = "default") {

    safari_type = safari_type.toLowerCase();

    let filters = {
        default: (response) => {
            return true;
        },
        littlecup: (response) => {
            if(response.base_experience < 100) return true;
            return false;
        },
        notfullyevolved: (response) => {
            if(response.base_experience > 100 && response.base_experience < 180) return true;
            return false;
        },
        uber: (response) => {
            if(response.base_experience > 200) return true;
            return false;
        },
        water: (response) => {
            return response.types.some(type => type.type.name === 'water');
        },
        fire: (response) => {
            return response.types.some(type => type.type.name === 'fire');
        },
        grass: (response) => {
            return response.types.some(type => type.type.name === 'grass');
        },
        ghost: (response) => {
            return response.types.some(type => type.type.name === 'ghost');
        },
        poison: (response) => {
            return response.types.some(type => type.type.name === 'poison');
        }
    }

    const filter = filters[safari_type] || filters["default"];
    console.log(safari_type, filter)
    
    const attachment = new Discord.MessageEmbed();
    attachment.setTitle(`Iniciando rota ${safari_type}`);
    message.channel.send(attachment);

    let amount = 3;
    function fn() {
        if(amount--) {
            setTimeout(function intern_fn() {
                getRandomPokemon()
                .then(response => {
                    if(filter(response)) {
                        apresentOnChat(response, message);
                        startCapture(client, message, fn.bind(null, client, message));
                    } else {
                        intern_fn();
                    }
                }).catch(console.error);
            }, Math.random() * SECONDS * 1000);
            
            return fn;
        } else {
            attachment.setTitle(`Rota finalizada.`);
            message.channel.send(attachment);
        }
    }; fn();
}


module.exports = { init }