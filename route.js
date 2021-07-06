const ready = require('./events/ready.js');
const guildCreate = require('./events/guildCreate.js');
const guildDelete = require('./events/guildDelete.js');
const message = require('./events/message.js');

function on(client) {

    let readyFn = ready.execute.bind(null, client);
    let guildCreateFn = guildCreate.execute.bind(null, client);
    let guildDeleteFn = guildDelete.execute.bind(null, client);
    let messageFn = message.execute.bind(null, client);

    client.once('ready', readyFn);
    client.on('guildCreate', guildCreateFn);
    client.on('guildDelete', guildDeleteFn);
    client.on('message', messageFn);

    return function () {

        client.off('ready', readyFn);
        client.off('guildCreate', guildCreateFn);
        client.off('guildDelete', guildDeleteFn);
        client.off('message', messageFn);
    };
}

module.exports = { on }