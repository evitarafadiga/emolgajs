const Discord = require("discord.js")
const Pokedex = require('pokedex-promise-v2');

const P = new Pokedex(/*options*/);
const POKEMON_AMOUNT = 898;
const SECONDS = 5;

const getRandomPokemon = () => {
    let id = (Math.random() * POKEMON_AMOUNT) | 0;
    return P.getPokemonByName(id);
}

const apresentOnChat = (response, message, egg_type) => {

    const attachment = new Discord.MessageEmbed();
    attachment.setTitle('🥚');
    attachment.setDescription(`O ovo ${egg_type} eclodiu em um(a) ${response.name}!`);
    attachment.setImage(response.sprites.front_default);
    message.channel.send(/*message.author,*/ attachment);
}

function init(client, message, egg_type = "comum") {

    egg_type = egg_type.toLowerCase();

    let filters = {
        comum: (response) => {
            return true;
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
        },
        dark: (response) => {
            return response.types.some(type => type.type.name === 'dark');
        },
        fairy: (response) => {
            return response.types.some(type => type.type.name === 'fairy');
        },
        electric: (response) => {
            return response.types.some(type => type.type.name === 'electric');
        },
        steel: (response) => {
            return response.types.some(type => type.type.name === 'steel');
        },
        normal: (response) => {
            return response.types.some(type => type.type.name === 'normal');
        },
        ice: (response) => {
            return response.types.some(type => type.type.name === 'ice');
        },
        fighting: (response) => {
            return response.types.some(type => type.type.name === 'fighting');
        },
        flying: (response) => {
            return response.types.some(type => type.type.name === 'flying');
        },
        dragon: (response) => {
            return response.types.some(type => type.type.name === 'dragon');
        },
        bug: (response) => {
            return response.types.some(type => type.type.name === 'bug');
        },
        rock: (response) => {
            return response.types.some(type => type.type.name === 'rock');
        },
        psychic: (response) => {
            return response.types.some(type => type.type.name === 'psychic');
        },
        ground: (response) => {
            return response.types.some(type => type.type.name === 'ground');
        }
    }

    let secondFilters = {
        comum: (response) => {
            return true;
        },
        raro: (response) => {
            if(response.base_experience > 95 && response.base_experience < 285) return true;
            return false;
        },
        insano: (response) => {
            if(response.base_experience > 285) return true;
            return false;
        }
    }

    
    const filter = filters[egg_type] || secondFilters[egg_type] || filters["comum"];
    console.log(egg_type, filter)
    
    const attachment = new Discord.MessageEmbed();
    attachment.setTitle(`Oh! Veja o que temos aqui... Um ovo ${egg_type}.`);
    message.channel.send(attachment);

    let amount = 1;
    function fn() {
        if(amount--) {
            setTimeout(function intern_fn() {
                getRandomPokemon()
                .then(response => {
                    if(filter(response)) {
                        apresentOnChat(response, message, egg_type);
                    } else {
                        intern_fn();
                    }
                }).catch(console.error);
            }, Math.random() * SECONDS * 1000);
            
            return fn;
        } else {
            return;
        }
    }; fn();
}


module.exports = { init }