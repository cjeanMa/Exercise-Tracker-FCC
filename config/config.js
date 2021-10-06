
require('dotenv').config();
module.exports = {
    app: {
        name: process.env.APP_NAME,
        port: process.env.APP_PORT || 3000,
        enviroment: process.env.APP_ENV,
        logpath: process.env.LOG_PATH
    },
    mongo: {
        host: process.env.MONGODB_HOST,
        database: process.env.MONGODB_NAME,
        user: process.env.MONGODB_USER,
        password: process.env.MONGODB_PASSWORD
    },
    loggin: {
        file: process.env.LOG_PATH,
        level: process.env.LOG_LEVEL || 'info',
        console: process.env.LOG_ENABLE_CONSOLE || true
      }
}