const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');

const dotenv =require('dotenv');
dotenv.config();

// token fetch using @BotFather to create a bot
const TOKEN = process.env.BOT_TOKEN;

// create a bot that uses polling to fetch a newUodate
const bot = new TelegramBot(TOKEN , {polling:true});

bot.on('message',(msg)=> {
 
    const text = msg.text;

    console.log("message received: ", text);
 
    bot.sendMessage(msg.chat.id, " you said: " + text);
});

bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, "Hello, I am a Bot! How can I help?");
});
bot.onText(/\/joke/,async(msg)=>{
 const joke  = await axios.get('https://official-joke-api.appspot.com/random_joke');

  const setup= joke.data.setup;
  const punchline =joke.data.punchline;
  bot.sendMessage(msg.chat.id ,setup + " " +punchline );


});