const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const connect = () => {
    return mongoose.connect('mongodb://127.0.0.1:27017/saysong');
};

module.exports = connect;