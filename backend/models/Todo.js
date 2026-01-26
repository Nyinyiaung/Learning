const mongoose = require('mongoose');
const { Schema } = mongoose;

const TodoSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    completed: Boolean,
})

module.exports = mongoose.model('Todos', TodoSchema);