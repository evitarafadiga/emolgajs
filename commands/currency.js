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

    const newUser = db.get('users').size().value();
    const founded = db.get('users').find({ name: owner.username }).value()    

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
        
        
    
    
    
    
    // // Add a post
    // db.get('users')
    // .push({ id: 1, title: 'lowdb is awesome'})
    // .write()
    
    // // Set a user using Lodash shorthand syntax
    // db.set('user.name', 'typicode')
    // .write()
    
}

module.exports = { init }