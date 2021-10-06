
require('dotenv').config();
module.exports = {
    app: {
        name: process.env.APP_NAME || "4th problem fcc test",
        port: process.env.APP_PORT || 5000,
        enviroment: process.env.APP_ENV || "dev",
        logpath: process.env.LOG_PATH
    },
    mongo: {
        host: process.env.MONGODB_HOST || "clustermongo.rx8jg.mongodb.net",
        database: process.env.MONGODB_NAME || "myFirstDatabase",
        user: process.env.MONGODB_USER || "mongoUser",
        password: process.env.MONGODB_PASSWORD || "admin123"
    },
    loggin: {
        file: process.env.LOG_PATH,
        level: process.env.LOG_LEVEL || 'info',
        console: process.env.LOG_ENABLE_CONSOLE || true
      }
}