const mongoose = require("mongoose")

const connection = mongoose.connect("mongodb+srv://aditi:aditi@cluster0.bxaz2tg.mongodb.net/newsaggreagtor?retryWrites=true&w=majority&appName=Cluster0")

module.exports = {connection}