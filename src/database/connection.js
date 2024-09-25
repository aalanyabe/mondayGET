const sql = require('mssql');
const config = require('../config')


async function getConnection() {
    try {
        const pool = await sql.connect(config.dbSettings)
        return pool
    } catch (error) {
        console.error(error)
    }

}

module.exports = {getConnection,sql}

