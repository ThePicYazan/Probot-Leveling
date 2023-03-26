const Discord = require("discord.js-selfbot-v13"); //npm i discord.js-selfbot-v13
const client = new Discord.Client(
    {
        checkUpdate: false
    }
);
const { userAccount } = require("sphinx-run");
require('./express');

client.on('ready', (client) => {
    console.log(client.user.tag)
})
new userAccount(client, Discord).leveling({
    channel: '1041129942898982985',//id channel
    randomLetters: false, //RandomLetters
    time: 60000, //Time you want to delay between each message,
});

client.login(process.env.token);