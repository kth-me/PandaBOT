module.exports = {
    name: 'kick',
    description: 'Kick a user',
    execute(message) {
        message.channel.send('Kicked: <user> <reason>');
    },
};