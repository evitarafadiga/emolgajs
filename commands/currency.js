const Discord = require("discord.js")
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
 
const adapter = new FileSync('db.json')
const db = low(adapter)

function init (client, message, owner) {
        
    db.defaults({ users: []
        // , user: {} 
    })
    .write()
    
    const founded = db.get('users').find({ discordId: owner.id }).value()    

    if (founded) {
        const attachment = new Discord.MessageEmbed();  
        // attachment.setTitle('💵 SALDO 💵');
        attachment.setDescription(`Olá ${owner}, seu saldo é de: ${founded.currency}`);
        attachment.setColor('#EFC201');
        message.channel.send(attachment);
        // console.log(founded)
    } else {
        const attachment = new Discord.MessageEmbed();  
        attachment.setTitle('Erro');
        attachment.setDescription(`Usuário não encontrado.`);
        attachment.setColor('#E83845');
        message.channel.send(attachment);
    };        
        
}

function stats (client, message, owner) {      
        
    const founded = db
    .get('users')
    .find({ discordId: owner.id })
    .value()
        
    // console.log(founded)

    if (founded) {
        const attachment = new Discord.MessageEmbed();  
        // attachment.setTitle('💵 SALDO 💵');
        attachment.setDescription(`${owner} - - - - - - - - - - - - - - - - - - 🪙 ${founded.currency}`);
        attachment.setFooter(`I N S Í G N I A S \n ${founded.badges.map(element => element.name).join(" | ")}
        E Q U I P E \n ${founded.party.map(element => element.name).join(" | ")}`);
        attachment.setColor('#EFC201');
        message.channel.send(attachment);

    } else {
        const attachment = new Discord.MessageEmbed();  
        attachment.setTitle('Erro');
        attachment.setDescription(`Usuário não encontrado.`);
        attachment.setColor('#E83845');
        message.channel.send(attachment);
    };        
        
}

function give (client, message, receptors) {

    let receivedError = [];

    const amount = parseInt(receptors[receptors.length-1], 10);    

    receptors.splice(-1);    

    receptors.forEach(element => {

        element = element.toLowerCase();

        const founded = db.get('users').find({ name: element }).value()

        if (founded) {
        
            db.get('users')
            .find({ discordId: founded.discordId })
            .assign({ currency: founded.currency + amount})
            .value()

            // console.log(founded)
            // console.log("QUANTIA: ", amount)
        } else {
        
            receivedError.push(element)
            // console.log(receivedError)        
        };        
    });

    message.react('🆗')
    
    // const attachment = new Discord.MessageEmbed();
    // attachment.setDescription(`Pix enviado!`);
    // attachment.setColor('#288BA8');
    // message.channel.send(attachment);

    if(receivedError > 0) {

        let str = [];
        receivedError.forEach(element => {
            str.push(element)            
        })
        const attachment = new Discord.MessageEmbed();
        attachment.setDescription(`Usuários ${str} não encontrados.`);
        attachment.setColor('#E83845');
        message.channel.send(attachment);
    }

}

function take (client, message, receptors) {

    db.defaults({ users: []
        // , user: {} 
    })
    .write()

    let receivedError = [];

    const amount = parseInt(receptors[receptors.length-1], 10);    

    receptors.splice(-1);    

    receptors.forEach(element => {

        element = element.toLowerCase();

        const founded = db.get('users').find({ name: element }).value()

        if (founded) {
        
            db.get('users')
            .find({ discordId: founded.discordId })
            .assign({ currency: founded.currency - amount})
            .value()

            // console.log(founded)
            // console.log("QUANTIA: ", amount)
        } else {
        
            receivedError.push(element)
            // console.log(receivedError)        
        };        
    });

    message.react('🆗')

    // const attachment = new Discord.MessageEmbed();
    // attachment.setDescription(`Pix cobrado!`);
    // attachment.setColor('#288BA8');
    // message.channel.send(attachment);

    if(receivedError > 0) {

        let str = [];
        receivedError.forEach(element => {
            str.push(element)            
        })
        const attachment = new Discord.MessageEmbed();
        attachment.setDescription(`Usuários ${str} não encontrados.`);
        attachment.setColor('#E83845');
        message.channel.send(attachment);
    }

}

function poke (client, message, receptors) {

    db.defaults({ users: []
        // , user: {} 
    })
    .write()

    let receivedError = []; 

    receptors.forEach(element => {

        element = element.toLowerCase();

        // console.log(element)

        const founded = db.get('users').find({ discordId: message.author.id }).value()
        // console.log(founded)

        if (founded) {

            let party = db
            .get('users')
            .find({ discordId: founded.discordId })
            .get('party')
            .value();

            if (party.length > 5) party.shift();

            party.push({ name: element });

            db.get('users')
            .find({ discordId: founded.discordId })
            .assign({ party })
            .write();
            
        } else {
        
            receivedError.push(element)
            // console.log(receivedError)        
        };        
    });

    message.react('🆗')

    // const attachment = new Discord.MessageEmbed();
    // attachment.setDescription(`Ficha atualizada!`);
    // attachment.setColor('#288BA8');
    // message.channel.send(attachment);

    if(receivedError > 0) {

        let str = [];
        receivedError.forEach(element => {
            str.push(element)            
        })
        const attachment = new Discord.MessageEmbed();
        attachment.setDescription(`Usuários ${str} não encontrados.`);
        attachment.setColor('#E83845');
        message.channel.send(attachment);
    }
  
}

function unpoke (client, message, num) {

    const amount = parseInt(num, 10);    

    let receivedError = [];

    const founded = db.get('users').find({ discordId: message.author.id }).value()
    // console.log(founded)

    for (let index = 0; index < amount; index++) {
        
        if (founded) {

            let party = db
            .get('users')
            .find({ discordId: founded.discordId })
            .get('party')
            .value();

            if (party.length > 0) party.pop();

            db.get('users')
            .find({ discordId: founded.discordId })
            .assign({ party })
            .write();
            
        } else {
        
            receivedError.push(element)
            // console.log(receivedError)        
        };  
        
    }

    message.react('🆗')

    // const attachment = new Discord.MessageEmbed();
    // attachment.setDescription(`Ficha atualizada!`);
    // attachment.setColor('#288BA8');
    // message.channel.send(attachment);

    if(receivedError > 0) {

        let str = [];
        receivedError.forEach(element => {
            str.push(element)            
        })
        const attachment = new Discord.MessageEmbed();
        attachment.setDescription(`Usuários ${str} não encontrados.`);
        attachment.setColor('#E83845');
        message.channel.send(attachment);
    }
  
}

function register (client, message, owner) {   

    db.defaults({ users: []
        // , user: {} 
    })
    .write()
    
    const userSize = db.get('users').size().value();
    
    const founded = db.get('users').find({ discordId: owner.id }).value()    

    if (founded) {
        const attachment = new Discord.MessageEmbed();
        attachment.setDescription(`Você ${owner} já possui uma ficha.`);
        attachment.setColor('#E389B9');
        message.channel.send(attachment);
        // console.log(founded)
    } else {

        let nickname = owner.username.toLowerCase();
        // Add a post
        db.get('users')
        .push({ 
        id: userSize+1, 
        name : nickname,
        discordId: owner.id,
        currency: 0,
        party: [],
        badges: []
        })
        .write()
        
        const attachment = new Discord.MessageEmbed();
        attachment.setDescription(`Usuário ${owner} cadastrado com sucesso!`);
        attachment.setColor('#288BA8');
        message.channel.send(attachment);
    };
      
}

function badge (client, message, receptors) {

    db.defaults({ users: []
        // , user: {} 
    })
    .write()

    let receivedError = []; 

    receptors.forEach(element => {

        element = element.toLowerCase();

        // console.log(element)

        const founded = db.get('users').find({ discordId: message.author.id }).value()
        // console.log(founded)

        if (founded) {

            let badges = db
            .get('users')
            .find({ discordId: founded.discordId })
            .get('badges')
            .value();

            if (badges.length > 3) badges.shift();

            badges.push({ name: element });

            db.get('users')
            .find({ discordId: founded.discordId })
            .assign({ badges })
            .write();
            
        } else {
        
            receivedError.push(element)
            // console.log(receivedError)        
        };        
    });

    message.react('🆗')

    // const attachment = new Discord.MessageEmbed();
    // attachment.setDescription(`Ficha atualizada!`);
    // attachment.setColor('#288BA8');
    // message.channel.send(attachment);

    if(receivedError > 0) {

        let str = [];
        receivedError.forEach(element => {
            str.push(element)            
        })
        const attachment = new Discord.MessageEmbed();
        attachment.setDescription(`Usuários ${str} não encontrados.`);
        attachment.setColor('#E83845');
        message.channel.send(attachment);
    }
  
}

module.exports = { init, register, give, take, poke, unpoke, stats, badge }