const mongo = require('./mongo')

function findAll() {
    return global.conn.collection("customers").find().toArray();
}

module.exports = { findAll }