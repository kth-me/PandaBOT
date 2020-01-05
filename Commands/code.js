module.exports = {
    name: 'code',
    description: 'give user code for the bot.',
    execute(message) {
        message.channel.send('Here is my code: https://github.com/PundaVR/PandaBOT');
    },
};