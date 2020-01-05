module.exports = {
    name: 'hi',
    description: 'reply with hello',
    cooldown: 0,
    execute(message) {
        console.log('hi command used!');
        message.channel.send('Hello!');
    },
};