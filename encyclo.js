var TelegramBot = require('node-telegram-bot-api');
var fs = require('fs');
var token = '337899036:AAFzrrj3JdCyO2PM7BRI9JlfLVvGZB4jlmA';
var bot = new TelegramBot(token, {polling: true});
bot.on('text', function(msg) {
	bot.sendMessage(msg.from.id, 'I am fine');
});