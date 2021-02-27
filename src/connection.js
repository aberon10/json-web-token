const moongose = require('mongoose');
const connection = moongose.connect(`mongodb://${process.env.HOST}:${process.env.DB_PORT}/${process.env.DATABASE}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
.then(db => console.log(`Connected to database successfully`))
.catch(err => console.log(`Error to connect database ${err}`))

module.exports = connection;
