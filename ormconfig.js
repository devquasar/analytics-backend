module.exports = {
    "type": "postgres",
    "url" : process.env.DATABASE_URL,
    "entities": [
      "dist/modules/**/**.entity.js"
    ],
    "migrationsTableName": "migration",
    "migrations": [
      "dist/migration/*.ts"
    ],
    "cli": {
      "migrationsDir": "src/migration"
    },
    "ssl": {
      "rejectUnauthorized": false
    },
  }