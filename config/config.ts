require("dotenv").config();
module.exports = {
    development: {
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        dialect: "mssql",
        applicationurl: process.env.APPLICATION_URL,
        apiUrl: process.env.API_URL,
        pool: {
            max: 5,
            min: 0,
            acquire: 60000,
            idle: 10000
        }
    },
    test: {

    },
    production: {

    },
};
