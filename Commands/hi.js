module.exports = {
    name: 'hi',
    description: 'reply with hello',
    cooldown: 0,
    execute(message) {
        message.channel.send('Hello!');
    },
};