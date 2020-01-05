module.exports = {
    name: 'invite',
    description: 'reply with invite for the bot',
    execute(message) {
        message.channel.send('Here is the invite link for me: https://discordapp.com/oauth2/authorize?client_id=662910667614846985&scope=bot');
    },
};