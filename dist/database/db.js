const mongoose = require('mongoose')
const { URI } = require('../config')

const conectDB = async () => {
    try {
        mongoose.connect(process.env.URI)
        console.log('conectada la base de datos');
    } catch (error) {
        console.log('algo ocurrio >');
    }
}

module.exports = { conectDB }