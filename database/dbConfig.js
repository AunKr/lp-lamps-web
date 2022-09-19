module.exports = {
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: 'root',
    DB: 'luxpal',
    // HOST: 'sql6.freemysqlhosting.net',
    // USER: 'sql6516969',
    // PASSWORD: 'hU9G3iJ3Mi',
    // DB: 'sql6516969',
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}