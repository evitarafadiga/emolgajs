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
        console.log(founded)
    } else {
        const attachment = new Discord.MessageEmbed();  
        attachment.setTitle('Erro');
        attachment.setDescription(`Usuário não encontrado.`);
        attachment.setColor('#E83845');
        message.channel.send(attachment);
    };        
        
}

function give (client, message, receptors) {

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
            .assign({ currency: founded.currency + amount})
            .value()

            // console.log(founded)
            // console.log("QUANTIA: ", amount)
        } else {
        
            receivedError.push(element)
            // console.log(receivedError)        
        };        
    });

    const attachment = new Discord.MessageEmbed();
    attachment.setDescription(`Pix efetuado com sucesso!`);
    attachment.setColor('#288BA8');
    message.channel.send(attachment);

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
  
    db.getState()
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

    const attachment = new Discord.MessageEmbed();
    attachment.setDescription(`Pix cobrado com sucesso!`);
    attachment.setColor('#288BA8');
    message.channel.send(attachment);

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
  
    db.getState()
}

function register (client, message, owner) {   
    
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
        currency: 0
        })
        .write()
        
        const attachment = new Discord.MessageEmbed();
        attachment.setDescription(`Usuário ${owner} cadastrado com sucesso!`);
        attachment.setColor('#288BA8');
        message.channel.send(attachment);
    };
      
}

module.exports = { init, register, give, take, stats }