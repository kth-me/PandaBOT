module.exports = {
    name: 'ping',
    description: 'reply with delay from server!',
    execute(message) {
        console.log('ping command used!');
        message.channel.send('Pong (time ms work in progress).');
    },
};