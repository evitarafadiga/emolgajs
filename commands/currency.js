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
        attachment.setTitle('💵 SALDO 💵');
        attachment.setDescription(`Olá ${owner}, seu saldo é de: ${founded.currency}`);
        attachment.setColor('#EFC201');
        message.channel.send(attachment);
        console.log(founded)
    } else {
        const attachment = new Discord.MessageEmbed();  
        attachment.setTitle('💵 Erro! 💵');
        attachment.setDescription(`Usuário não encontrado.`);
        attachment.setColor('#E83845');
        message.channel.send(attachment);
    };        
        
}

function register (client, message, owner) {   
    
    const userSize = db.get('users').size().value();
    
    const founded = db.get('users').find({ discordId: owner.id }).value()    

    if (founded) {
        const attachment = new Discord.MessageEmbed();
        attachment.setDescription(`Você ${owner} já possui uma ficha.`);
        attachment.setColor('#E389B9');
        message.channel.send(attachment);
        console.log(founded)
    } else {

        // Add a post
        db.get('users')
        .push({ 
        id: userSize+1, 
        name : owner.username,
        discordId: owner.id,
        currency: 0
        })
        .write()
        
        const attachment = new Discord.MessageEmbed();
        attachment.setDescription(`Usuário ${owner} cadastrado com sucesso!`);
        attachment.setColor('#288BA8');
        message.channel.send(attachment);
    };
        
        
    
    
    
    
    // // Add a post
    // db.get('users')
    // .push({ id: 1, title: 'lowdb is awesome'})
    // .write()
    
    // // Set a user using Lodash shorthand syntax
    // db.set('user.name', 'typicode')
    // .write()
    
}

module.exports = { init, register }