module.exports = {
    name: 'ping',
    description: 'reply with delay from server!',
    execute(message) {
        const Discord = require('discord.js');
        const client = new Discord.Client();
        client.commands = new Discord.Collection();
        console.log('ping command used!');
        //message.channel.send(`Pong ${user.id}ms`);
        message.channel.send("Pinging...");
        message.channel.send(`Pong! Latency is ${message.createdTimestamp - message.createdTimestamp}ms.`); //API Latency is ${Math.round(client.ping)}ms`);//${Math.round(client.ping)}
        }
    }