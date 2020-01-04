module.exports = {
    name: 'ping',
    description: 'reply with delay from server!',
    execute(message) {
        message.channel.send('Pong (time ms).');
    },
};